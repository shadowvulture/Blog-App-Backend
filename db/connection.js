const mongoose = require('mongoose');
const express = require( 'express' )
const app = express()

 let mongoURI = ""
 if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
  } else {
	mongoURI = "mongodb://localhost/blog";
  }

mongoose.Promise = Promise;

module.exports = mongoose;