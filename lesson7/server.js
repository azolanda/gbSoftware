const express = require('express');
const app = express();

let data, searchValue, searchData;

app.use(express.static('./'));
app.use(express.json());

const mysql = require('mysql');
// import mysql from "mysql";
const dbConfig = require("./config/db.config.js");

const con = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

con.query("SELECT * FROM sql6682960.about_cats",
  function (err, results, fields) {
    // console.log(err);
    // console.log(results[0].name); // собственно данные
    // -------------------------------
    // for (let i = 0; i < results.length; i++) {
    //   console.log(results[i]);

    // }
    // -------------------------------
    // data = results[0].name;
    data = results;
    // console.log(fields); // мета-данные полей 
  });

app.get('/info/:dynamic', (req, res) => {
  const {
    dynamic
  } = req.params;
  const {
    key
  } = req.query;
  console.log(dynamic, key);
  res.status(200).json({
    info: data
  });
});

// ====================FOR SEARCH=========================
// POST
const getDataFromDB = (searchValueStr) => {
  console.log("inDB================" + searchValueStr);
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM sql6682960.about_cats WHERE `name` LIKE ? OR `about` LIKE ?", [`%${searchValueStr}%`, `%${searchValueStr}%`],
      function (err, results, fields) {
        console.log(err);
        // console.log(`SELECT * FROM web_app_db.about_cats WHERE name LIKE '%${searchValue}%' OR about LIKE '%${searchValue}%'`);
        // console.log(results[0].name); // собственно данные
        // =========================================
        searchData = results;
        resolve(results);
        console.log("from db=========================== " + results[0].name, results.length);
        // console.log(fields); // мета-данные полей 
      });
  })
}

app.post('/', (req, res) => {
  searchValue = req.body.searchValue;

  if (!searchValue) {
    return res.status(400).send({
      status: 'failed'
    });
  }

  console.log("from post=========================== " + searchValue);

  res.status(200).send({
    status: 'received'
  });
});

app.get('/search/:dynamic', (req, res) => {
  console.log("внутри get========================");
  const {
    dynamic
  } = req.params;
  const {
    key
  } = req.query;

  getDataFromDB(searchValue).then((result) => {
    searchData = result;

    res.status(200).json({
      info: searchData
    });
  });
});

// con.end();

// ====================SEND MAIL POST=========================
// var formData = require('form-data');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

// app.use(cors()); // Allow request from any IP
// app.use(express.urlencoded({
//   extended: false
// }));
// app.use(bodyParser.json({
//   limit: '50mb'
// }));
// app.use(bodyParser.urlencoded({
//   extended: true,
//   limit: '50mb'
// }));
let formDataFields = null;
app.post('/sendmail', upload.none(), (req, res) => {
  // console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: 'failed'
    });
  }

  const {
    name,
    email,
    comments,
    check,
    company_field
  } = req.body;

  if (company_field.length > 0) {
    return res.status(400).send({
      message: 'failed'
    });
  }

  formDataFields = {
    'name': name,
    'email': email,
    'comments': comments,
    'check': check,
  }

  sendEmail()
    .then(result => {
      return res.status(200).send({
        message: 'received'
      });
    })
    .catch(err => {
      console.error;
      return res.status(400).send({
        message: 'failed'
      });
    });

});

// ====================SEND MAIL FUNCTION=========================
const nodemailer = require('nodemailer');
const mailConfig = require("./config/mail.config.js");

async function sendEmail() {
  // Create a transporter object using the default SMTP transport
  // let testEmailAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    host: mailConfig.HOST,
    service: mailConfig.SERVICE,
    port: mailConfig.PORT,
    // port: 587,
    secure: true, // enforcing secure transfer
    auth: {
      // user: testEmailAccount.user,
      // pass: testEmailAccount.pass,
      user: mailConfig.USER,
      pass: mailConfig.PASSWORD,
    }
  });

  // Set up email data
  let mailOptions = {
    from: mailConfig.USER,
    to: mailConfig.RECEIVER,
    subject: 'сообщение из приложения CatsRoom',
    text: `Имя пользователя: ${formDataFields.name} \ne-mail: ${formDataFields.email} \nКомментарий: ${formDataFields.comments} \nСогласие на обработку персональных данных: ${formDataFields.check}`
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
}

app.get('/sendmail', (req, res) => {
  res.send('Sending mail..')
});
// =============================================

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