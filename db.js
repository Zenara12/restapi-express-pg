const {Pool} = require('pg');

const pool = new Pool({
    user:"postgres",
    password:"localhost",
    database:"students",
    password:"admin123",
    port:"5432",
});

module.exports = pool;