const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'muskan.99.rathod@gmail.com',
    pass: 'maganlal'
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

// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'muskan.99.rathod@gmail.com',
//         pass: 'maganlal'
//     }
// });
  
// let mailDetails = {
//     from: 'muskan.99.rathod@gmail.com',
//     to: 'rathodmuskan21@gmail.com',
//     subject: 'Test mail',
//     text: 'Node.js testing mail for GeeksforGeeks',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
// };
  
// mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//     } else {
//         console.log('Email sent successfully');
//     }
// });

app.listen(8080, () => {
  console.log("server is upto port 8080");
});