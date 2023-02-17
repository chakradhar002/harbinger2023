var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Exchange',
  auth: {
    user: 'Aditya.Mahajan@harbingergroup.com',
    pass: 'H@rb!ng3R@GR2023'
  }
});

var mailOptions = {
  from: 'Aditya.Mahajan@harbingergroup.com',
  to: 'vishal.khatal@harbingergroup.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});