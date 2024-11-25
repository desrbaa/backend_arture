const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
 
app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    "database": "projectarture",
});

database.connect((err) => {
    if(err) throw err;
    console.log("Data base connected")
});

//? Ambil semua data users
app.get("/api/v1/users", async (req, res) => {
   console.log("GET API USER DI REQUEST")
   database.query("SELECT * FROM users", (err, rows) =>{
    if (err) throw err;
    res.json({
        success: true,
        message: "Getting Users Data",
        data: rows,
    });
   });
});

//? Jalanin server nya di port 3001
app.listen(3001, () => {
    console.log("server is running on port 3001");
});