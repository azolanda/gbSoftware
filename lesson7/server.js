const express = require('express');
const app = express();
let data, searchData;

app.use(express.static('./'));
app.use(express.json());

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

app.get('/info/:dynamic', (req, res) => {
  const {dynamic} = req.params;
  const {key} = req.query;
  console.log(dynamic, key);
  res.status(200).json({info: data});
});

// POST
app.post('/',  (req, res) => {
  const {searchValue} = req.body;
  // searchValue = parcel;
  console.log(searchValue);
  if(!searchValue) {
    return res.status(400).send({status: 'failed'});
  }

  con.query("SELECT * FROM web_app_db.about_cats WHERE `name` LIKE ? OR `about` LIKE ?", [`%${searchValue}%`, `%${searchValue}%`],
    function(err, results, fields) {
      console.log(err);
      console.log("==========================================")
      // console.log(`SELECT * FROM web_app_db.about_cats WHERE name LIKE '%${searchValue}%' OR about LIKE '%${searchValue}%'`);
      // console.log(results[0].name); // собственно данные
      for (let i = 0; i < results.length; i++) {      
        console.log(results[i]);
        
      }
      // data = results[0].name;
      searchData = results;
      // console.log(fields); // мета-данные полей 
  });
    res.status(200).send({status: 'received'});
  });

// con.end();

const port = 8383;
const server = app.listen(port, () => console.log(`Server has started on port: ${port}`));
// listen for INT signal e.g. Ctrl-C
// обрабатываем сигнал прерывания (Ctrl+C) с терминала
process.on('SIGINT', () => {
  // console.log(`Server has stopped on port: ${port}`);
  server.close(() => {
    con.end(); // завершаем подключение к БД
    console.log("Server has stopped")
  });
});
// process.on('SIGTERM', () => {
//   con.end();
//   console.log(`Server has stopped (SIGTERM) on port: ${port}`);
// });
//or even exit event 
process.on('exit', () => {
  server.close(() => {
    con.end(); // завершаем подключение к БД
    console.log("Server has stopped")
  });
}); 

// process.on('close', () => {
//   con.end();
//   console.log(`Server has closed (exit) on port: ${port}`);
// }); 

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