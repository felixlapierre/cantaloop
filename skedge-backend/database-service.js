//
//
// Everything related to connecting to MongoDB and manipulating the database
//
//
const mongoose = require('mongoose');
const assert = require('assert');

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

function getCourses(){

}

function getCourses(subject, catalog){

}

function getLabs(){

}

function getLabs(subject, catalog){

}

function getLectures(){

}

function getLectures(subject, catalog){

}

function getTutorials(){

}

function getTutorials(subject, catalog){

}

function getSections(){

}

function getSections(subject, catalog){

}

function getCoPreRequisites(){

}

function getCoPreRequisites(subject, catalog){

}

function getDescriptions(){

}

function getDescriptions(subject, catalog){

}

function getUserRecord(){

}

function putUserRecord(){

}

function getUserSchedule() {

}

function putUserSchedule(){

}
