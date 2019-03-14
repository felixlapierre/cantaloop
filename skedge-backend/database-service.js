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
module.exports = {
getCourseCatalog: function () {
  courseSchem.lecSch.find({} ,'subject catalog', function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });
},



getCoursesDescription: function () {
  courseSchem.courseSch.find({}, 'subject catalog courseTitle', function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

},

getCourses: function () {
  courseSchem.courseSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

},


getCourses: function(subject,catalog) {
  courseSchem.courseSch.find({'subject': subject, 'catalog': catalog} 
  ,'subject catalog componentCode section'
  ,function(err, result){
    if(err){
      console.log("Error!")
    }else{
      console.log(result);
    }
  });

},

// getCourses('ENGR','213');
//<== This works but im not sure in what format we want to return the stuff

getLabs: function () {
  courseSchem.labSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

},


getLabs: function getLabs(subject, catalog) {

},

getLectures: function getLectures() {
  courseSchem.lecSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

},



getLectures: function getLectures(subject, catalog) {

},

getTutorials: function getTutorials() {
  courseSchem.tutSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

},

getTutorials: function getTutorials(subject, catalog) {

},

getSections: function getSections() {

},

getSections: function getSections(subject, catalog) {

},

getCoPreRequisites:function getCoPreRequisites() {

},

getCoPreRequisites: function getCoPreRequisites(subject, catalog) {

},

getDescriptions: function getDescriptions() {

},

getDescriptions: function getDescriptions(subject, catalog) {

},

getUserRecord: function getUserRecord() {

},

putUserRecord: function putUserRecord() {

},

getUserSchedule: function getUserSchedule() {

},

putUserSchedule: function putUserSchedule() {

}
};



