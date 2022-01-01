#!/bin/bash

echo "Hello, welcome to your Project Setup!"
echo "Enter the database you want to use.."
echo "-mongo"
echo "-sql"
echo "-postgres"

read db
if [[ $db = "mongo" ]]; then 
    echo "Mongo Selected!"
    rm database/indexSql.js
    rm database/indexPostgres.js
    mv database/indexMongo.js database/index.js
    npm install mongoose
elif [[ $db = "postgres" ]]; then
    echo "PostGres Selected!"    
    rm database/indexMongo.js
    rm database/indexSql.js
    mv database/indexPostgres.js database/index.js
    npm install postgres
elif [[ $db = "sql" ]]; then
    echo "MySql Selected!"
    rm database/indexMongo.js
    rm database/indexPostgres.js
    mv database/indexSql.js database/index.js
    npm install mysql
else 
    echo "Try Again.."         
fi


# npm install lodash