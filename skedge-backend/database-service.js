//
//
// Everything related to connecting to MongoDB and manipulating the database
//
//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const assert = require('assert');
let courseModel = require('./courseSchem');
fs = require('fs');


const server = 'skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net';
const database = 'skedge-app';


class Database {
    constructor() {
      this._connect()
    }
  _connect() {
       mongoose.connect("mongodb+srv://skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net/skedge-app")
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }

  module.exports = new Database();

    const db = new Database();



//  ///////////////////////////////////////////////////////////////////////////////   
// /////// Trying to load a json file, parse it and save it into the database ////

// var listCourse = fs.readFileSync('./coursesTesting.json', 'utf8', (err, data) => {
//     if(err) throw err;
//     return(listCourse);
// });

// var listConverted = JSON.parse(listCourse);

// mongoose.connection.collection('courses').insertMany(listConverted, function( err, result){
//     if(err){
//         console.log("Error, fail");
//     }else{
//         console.log("yay reussi");
//     }
// })







