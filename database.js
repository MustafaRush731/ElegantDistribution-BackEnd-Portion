const mysql = require('mysql2');
const bluebird = require('bluebird');

const pool  = mysql.createConnection({
    host: 'localhost',
    user: 'mustafa',
    password: 'Musmus73$',
    database: 'ElegantDist',
    Promise: bluebird
});


module.exports = pool.promise();