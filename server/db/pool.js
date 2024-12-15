const { Pool } = require('pg');
require('dotenv').config();

const password = String(process.env.DB_PASSWORD);

const pool = new Pool({
    user: process.env.DB_USER,   
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: password,
    port: process.env.DB_PORT,
});

module.exports = pool;