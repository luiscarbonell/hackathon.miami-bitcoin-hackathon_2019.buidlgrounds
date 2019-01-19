'use strict'

let dotenv = require('dotenv').config()
let chalk = require('chalk')
let faker = require('faker')
let express = require('express')
let async = require('neo-async')
let mongoose = require('mongoose')
let bitcore = require('bitcore-lib')
let Message = require('bitcore-message')
let bodyParser = require('body-parser')
let Insight = require('bitcore-explorers').Insight

let Address = require('./models/address')
let User = require('./models/user')

mongoose.connect("mongodb://localhost:27017")

let app = express()

let PORT = process.env.PORT || 8080

/**
* @res {Object}
* @res.address {string} address - BTC Wallet address
*/
app.get("/address", function(req, res) {
  async.auto({
    // Create Private Key
    "key": function(callback) {
      let value = Buffer.from(faker.lorem.words())
      let hash = bitcore.crypto.Hash.sha256(value)
      let bn = bitcore.crypto.BN.fromBuffer(hash)
      let key = new bitcore.PrivateKey(bn)
      
      callback(null, key)
    },
    // Create Address
    "address": ["key", function(results, callback) {
      let address = results.key.toAddress('testnet')
      
      callback(null, address)
    }],
    // Store Private Key & Address
    "store": ["key", "address", function(results, callback) {
      Address.create({
        key: results.key,
        address: results.address
      }, callback)
    }]
  }, function(error, results) {
    if(error) {
      res.status(500).send(error)
    } else {
      res.json({
        address: JSON.parse(JSON.stringify(results.address)).hash
      })
    }
  })
})

app.post('/user', function(req, res) {
  res.json({
    success: true
  })
})

app.listen(PORT, function() {
  console.log("\nServer is listening on http://locahost:" + chalk.bold(PORT) + "\n")
})
