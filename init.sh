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
elif [[ $db = "postgres" ]]; then
    echo "PostGres Selected!"    
    rm database/indexMongo.js
    rm database/indexSql.js
elif [[ $db = "sql" ]]; then
    echo "MySql Selected!"
    rm database/indexMongo.js
    rm database/indexPostgres.js
else 
    echo "Try Again.."         
fi


# npm install lodash