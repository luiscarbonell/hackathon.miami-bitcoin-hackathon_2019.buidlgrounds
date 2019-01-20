'use strict'

let dotenv = require('dotenv').config()
let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL || "buidlgrounds@gmail.com",
    pass: process.env.SMTP_PASSWORD
  }
})

let options = {
  from: process.env.SMTP_EMAIL || "buidlgrounds@gmail.com",
  to: "luiscarbonell5683@gmail.com",
  subject: "Enjoy Learning!",
  html: '<h3>URL: <small><a href="https://bootcamp.buidlgrounds.com">https://bootcamp.buidlgrounds.com</a></small></h3><br /><h3>Password: <small>buidlbtc</small></h3>'
}

transporter.sendMail(options, function(error, info) {
  console.log(error)
  console.log(info)
})