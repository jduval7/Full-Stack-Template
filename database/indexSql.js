const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'YOUR_DATABASE_NAME'  // Insert database name here.
});

connection.connect((err) => {
    if (err) {
        console.error('connection error in mySQL db: ', err);
    } else {
        console.log('Connected to MySQL!')
    }
});

// Create your query functions:

const getAllUsers = function (callback) {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            callback(err);
        }
        callback(results);
    });
};

var updateUser = function (req, callback) {

    var requestId = parseInt(req.id);
    var balance = req.balance;
    console.log(balance, requestId);

    connection.query('UPDATE users SET balance=? where id=?',
        [balance, requestId], (err, results) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            console.log(results);
            callback(results);
        });
};



// Export the function's here
module.exports = {
    db: connection,
    getAllUsers: getAllUsers,
};