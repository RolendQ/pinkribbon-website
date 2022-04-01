import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"));

/**const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "34.152.30.93",
    user: "root",
    password: "vYW3rK*R",
    database: "vuroyaldb"
});

app.listen(3001, () => {
    console.log("running server");
});*/