const express = require("express");
const app = express();
const mysql = require('mysql')

// Use axios for the login/posting

// const db = mysql.createPool({
//     host: "34.152.30.93",
//     user: "root",
//     password: "vYW3rK*R",
//     database: "vuroyaldb",
//     connectionLimit: 10
// })

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"", 
    database: "test",
    connectionLimit: 10
})

// app.use(cors());

const buffersize=4;
let buffernums=0; //这个要注意。。如果客户端重新启动，那么应该重新设置！
let buffer;
// 建议获取数据库的大小？

app.get("/user", (req, res) => {
    let params=req.query;
    console.log(params);
    let page=params.Id; //通过React客户端得到
    let itemsPerPages=params.pagesize;  //通过React客户端得到
    if(page==0){
        buffernums=0;
        console.log("Reset!");
    }
    if (page*itemsPerPages >= buffernums*buffersize)
    {
        console.log("Rebuffering!");
        db.query(`SELECT * FROM  vr_products_list_v1 WHERE VrId>( ${page}*${itemsPerPages}) ORDER BY VrId ASC LIMIT ${buffersize}`, (err, result, fields) => {
            if (err) {
                return console.log(err);
            }
            //res.set({'Access-Control-Allow-Origin': 'http://localhost:3000/'})
            res.setHeader("Access-Control-Allow-Origin", "*");
            buffer=result;
            let begin=page*itemsPerPages % buffersize;
            let sendresult=buffer.slice(begin,begin+itemsPerPages);
            res.send(sendresult);
            buffernums+=1;
        })
    }
    else{
        let begin=page*itemsPerPages % buffersize;
        let result=buffer.slice(begin,begin+itemsPerPages); //javascipt有数组切片嘛？
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(result);
    }

})

app.listen(3001, () => {
    console.log("Running on port 3001");
});