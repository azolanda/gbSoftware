const express = require('express');
const app = express();
let data;

app.use(express.static('./'));

const mysql = require('mysql');
// import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "password",
  database: "web_app_db"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
// const textResult = "results";
//     module.exports.text = textResult;
// let text = "";
// let textResult;
con.query("SELECT * FROM web_app_db.about_cats",
  function(err, results, fields) {
    console.log(err);
    console.log(results[0].name); // собственно данные
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
      
    }
    // data = results[0].name;
    data = results;
    // console.log(fields); // мета-данные полей 
});
con.end();

app.get('/info/:dynamic', (req, res) => {
  const {dynamic} = req.params;
  const {key} = req.query;
  console.log(dynamic, key);
  res.status(200).json({info: data});
});

const port = 8383;
app.listen(port, () => console.log(`Server has started on port: ${port}`));

// import mysql from "mysql";

/**const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "password",
  database: "web_app_db"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
// const textResult = "results";
//     module.exports.text = textResult;
// let text = "";
// let textResult;
con.query("SELECT name FROM web_app_db.recipes WHERE id = 2",
  function(err, results, fields) {
    // textResult = results;
    // export textResult;
    // module.exports.text = textResult;
    // module.exports.textResult = results;
    console.log(err);
    console.log(results[0].name); // собственно данные
    data = results[0].name;
    // console.log(fields); // мета-данные полей 
});
con.end();*/