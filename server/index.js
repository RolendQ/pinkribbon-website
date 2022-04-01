const express = require("express");
const app = express();
const mysql = require('mysql')

// Use axios for the login/posting

const db = mysql.createPool({
    host: "34.152.30.93",
    user: "root",
    password: "vYW3rK*R",
    database: "vuroyaldb",
    connectionLimit: 10
})

app.use(cors());

app.get("/get", (req, res) => {
    db.query('select * from vr_products_list_v1 limit 5', (err, result, fields) => {
        if (err) {
            return console.log(err);
        }
        res.send(result);
        return console.log(result);
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
});