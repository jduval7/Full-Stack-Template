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
    rm database/schema.sql
    rm database/schemaPostgres.sql
    mv database/indexMongo.js database/index.js
    npm install mongoose
elif [[ $db = "postgres" ]]; then
    echo "PostGres Selected!"    
    rm database/indexMongo.js
    rm database/indexSql.js
    rm database/schema.sql
    mv database/indexPostgres.js database/index.js
    npm install postgres
elif [[ $db = "sql" ]]; then
    echo "MySql Selected!"
    rm database/indexMongo.js
    rm database/indexPostgres.js
    rm database/schemaPostgres.sql
    mv database/indexSql.js database/index.js
    npm install mysql
else 
    echo "Try Again.."         
fi

# ____CSS PREFERENCES HERE____:

echo "Which CSS style do you want to use.."
echo "-regular"
echo "-styledComponents"
echo "-modules"
echo "-tailwind"
echo "-material"

read preference
if [[ $preference = "regular" ]]; then 
    echo "Plain ole CSS!"
    rm client/src/components/StyledComponents.jsx
    rm client/src/components/Button.style.js
    rm client/src/components/Button.js
    rm client/src/components/Container.style.js
    rm modules.config.js
elif [[ $preference = "styledComponents" ]]; then 
    echo "You've got Style!"
    rm client/src/components/App.jsx
    mv client/src/components/StyledComponents.jsx client/src/components/App.jsx
    rm modules.config.js
    npm i styled-components
elif [[ $preference = "modules" ]]; then 
    echo "Modular for the win!"
    rm client/src/components/StyledComponents.jsx
    rm client/src/components/Button.style.js
    rm client/src/components/Button.js
    rm client/src/components/Container.style.js
    rm webpack.config.js
    mv modules.config.js webpack.config.js
elif [[ $preference = "tailwind" ]]; then 
    echo "Tails never fails!"
    rm client/src/components/StyledComponents.jsx
    rm client/src/components/Button.style.js
    rm client/src/components/Button.js
    rm client/src/components/Container.style.js
    rm modules.config.js
elif [[ $preference = "material" ]]; then 
    echo "Sucker for material things!"
    rm client/src/components/StyledComponents.jsx
    rm client/src/components/Button.style.js
    rm client/src/components/Button.js
    rm client/src/components/Container.style.js
    rm modules.config.js
fi