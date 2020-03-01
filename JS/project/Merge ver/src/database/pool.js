const mysql = require("mysql2/promise");
const dbConfig = require("../../config/db.config.js");

// Create a connection to the database
const pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    connectionLimit: 10
});

module.exports = pool