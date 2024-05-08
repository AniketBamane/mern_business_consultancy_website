const mongoose = require('mongoose');

const serviceModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true,
  },
  clients:{
    type: Number,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model("Service", serviceModel);