'use strict'

let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    requierd: true
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Address"
  }
})

module.exports = mongoose.model("User", userSchema)