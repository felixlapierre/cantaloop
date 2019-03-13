//
//
// Everything related to connecting to MongoDB and manipulating the database
//
//
const mongoose = require('mongoose');
const assert = require('assert');
const server = 'skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net';

const database = 'skedge-app';

const db = mongoose.connection;

var courseSchem= require('./courseSchem');


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




//Returns everything in the database??
function getCourseCatalog() {
  courseSchem.lecSch.find({} ,'subject catalog', function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });
}



function getCourseDescription(){
  courseSchem.courseSch.find({}, 'subject catalog courseTitle', function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

}

function getCourses() {
  courseSchem.courseSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

}



function getCourses(subject, catalog) {
  courseSchem.courseSch.find({'subject': subject, 'catalog': catalog} 
  ,'subject catalog componentCode section'
  ,function(err, result){
    if(err){
      console.log("Error!")
    }else{
      console.log(result);
    }
  });

}

// getCourses('ENGR','213');
//<== This works but im not sure in what format we want to return the stuff

function getLabs() {
  courseSchem.labSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

}


function getLabs(subject, catalog) {

}

function getLectures() {
  courseSchem.lecSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

}



function getLectures(subject, catalog) {

}

function getTutorials() {
  courseSchem.tutSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

}

function getTutorials(subject, catalog) {

}

function getSections() {

}

function getSections(subject, catalog) {

}

function getCoPreRequisites() {

}

function getCoPreRequisites(subject, catalog) {

}

function getDescriptions() {

}

function getDescriptions(subject, catalog) {

}

function getUserRecord() {

}

function putUserRecord() {

}

function getUserSchedule() {

}

function putUserSchedule() {

}

module.exports= {
  courseDescription : getCourseDescription()

}
