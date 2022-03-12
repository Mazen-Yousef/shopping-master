const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    title: String,
    imagesUrl: String,
    desc: String,
    prise: Number,
    sizes: [String]
  });

  module.exports = productSchema