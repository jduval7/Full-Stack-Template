DROP DATABASE IF EXISTS CHANGE_THIS_TO_YOUR_DB_NAME;

CREATE DATABASE CHANGE_THIS_TO_YOUR_DB_NAME;

USE CHANGE_THIS_TO_YOUR_DB_NAME;

--   SAMPLE TABLE 
CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   balance decimal(10, 2) NOT NULL,
--   name varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
);

INSERT INTO users (id, name, balance) VALUES (1, "beth", 1915.96);
INSERT INTO users (id, name, balance) VALUES (2, "rebecca", 1488.92);
INSERT INTO users (id, name, balance) VALUES (3, "jake", 1913.7);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql  -- may have to use mysql -u root p
 *  to create the database and the tables.*/