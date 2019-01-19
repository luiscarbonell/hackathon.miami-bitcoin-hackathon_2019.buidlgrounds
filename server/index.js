'use strict'

let dotenv = require('dotenv').config()
let chalk = require('chalk')
let express = require('express')

let PORT = process.env.PORT || 8080

let app = express()

app.use(function(req, res) {
  res.send("Okay!")
})

app.listen(PORT, function() {
  console.log("\nServer is listening on http://locahost:" + chalk.bold(PORT) + "\n")
})