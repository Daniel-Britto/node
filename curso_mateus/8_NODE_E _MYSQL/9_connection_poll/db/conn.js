const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'kbrito2913',
    database: 'nodemysql',
})

module.exports = pool