'use strict'

let mongoose = require('mongoose')

let addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  key: {
    type: String,
    required: true,
    unique: true
  },
})

module.exports = mongoose.model("Address", addressSchema)