'use strict'

let dotenv = require('dotenv').config()
let faker = require('faker')
let async = require('neo-async')
let request = require('request')
let mongoose = require('mongoose')
let nodemailer = require('nodemailer')
let BTCTransaction = require('bitcoin-transaction')

let User = require('./models/user')
let Address = require('./models/address')

mongoose.connect(process.env.DB_URL || "mongodb://localhost:27017/pastelitos", {
  useNewUrlParser: true,
  useCreateIndex: true
})

let processPayments = function() {
  async.auto({
    "users": function(callback) {
      User.find({
        paid: false
      }).populate("address").exec(callback)
    },
    "paid_users": ["users", function(results, callback) {
      async.filter(results.users, function(user, callback) {
        BTCTransaction.getBalance(user.address.address, {
          network: "testnet"
        }).then(balance => {
          callback(null, balance !== 0)
        }).catch(callback)
      }, callback)
    }],
    "email_paid_users": ["paid_users", function(results, callback) {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_EMAIL || "buidlgrounds@gmail.com",
          pass: process.env.SMTP_PASSWORD
        }
      })
      
      async.map(results.paid_users, function(user, callback) {
        let options = {
          from: process.env.SMTP_EMAIL || "buidlgrounds@gmail.com",
          to: user.email,
          subject: "Enjoy Learning!",
          html: '<h3>URL: <small><a href="https://bootcamp.buidlgrounds.com">https://bootcamp.buidlgrounds.com</a></small></h3><br /><h3>Password: <small>buidlbtc</small></h3>'
        }

        transporter.sendMail(options, callback)
      }, callback)
    }],
    "update_paid_users": ["paid_users", function(results, callback) {
      async.each(results.paid_users, function(user, callback) {
        user.paid = true
        user.save(callback)
      }, callback)
    }]
  }, function(error, results) {
    if(error) {
      console.log(error)
    }
    
    processPayments()
  })
}

// Get balance of a BTC course wallet
/**
BTCTransaction.getBalance("mmFcatCGLmiAGBJcf9L5xi2Cxhqi2ScG3F", {
  network: "testnet"
}).then(balance => {
  console.log(typeof balance)
})
*/

// Gets users which have not paid the wallet
/**
async.auto({
  "users": function(callback) {
    User.find({
      paid: false
    }).populate("address").exec(callback)
  }
}, function(error, results) {
  console.log(results.users)
})
*/

// Send emails via SMTP using `nodemailer`
/**
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
*/

// Create fake users and BTC course wallets
/**
async.auto({
  "addresses": function(callback) {
    async.times(Math.round(Math.random() * 10 + 1), function(n, callback) {
      request("http://localhost:8080/address", function(error, response, address) {
        callback(error, address)
      })
    }, callback)
  },
  "users": ["addresses", function(results, callback) {
    async.map(results.addresses, function(address, callback) {
      request({
        method: "POST",
        url: "http://localhost:8080/user",
        json: {
          email: faker.internet.email(),
          address: JSON.parse(address).address,
          paid: Math.round(Math.random()) > 0.5 ? true : false
        }
      }, function(error, response, user) {
        callback(error, user)
      })
    }, callback)
  }]
}, function(error, results) {
  if(error) {
    console.log(error)
  } else {
    console.log("Addresses created: ", results.addresses.length)
    console.log("Users created: ", results.users.length)
  }
})
*/