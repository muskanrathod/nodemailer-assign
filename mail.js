const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'muskan.99.rathod@gmail.com',
    pass: '*******'
  }
});

var mailOptions = {
  from: 'muskan.99.rathod@gmail.com',
  to: 'rathodmuskan21@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ');
  }
});

app.listen(8080, () => {
  console.log("server is upto port 8080");
});
