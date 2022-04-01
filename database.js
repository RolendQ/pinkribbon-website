const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "34.152.30.93",
    user: "root",
    password: "vYW3rK*R",
    database: "vuroyaldb",
    connectionLimit: 10
})

pool.query('select * from vr_products_list_v1 limit 5', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})

module.exports = pool;