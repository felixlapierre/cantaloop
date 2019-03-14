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


getLabs: function (subject, catalog) {
  courseSchem.labSch.find({'subject': subject, 'catalog': catalog} 
  ,'subject catalog componentCode section'
  ,function(err, result){
    if(err){
      console.log("Error!")
    }else{
      console.log(result);
    }
  });

},

getLectures: function () {
  courseSchem.lecSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

},



getLectures: function (subject, catalog) {
  courseSchem.lecSch.find({'subject': subject, 'catalog': catalog} 
  ,'subject catalog componentCode section'
  ,function(err, result){
    if(err){
      console.log("Error!")
    }else{
      console.log(result);
    }
  });

},

getTutorials: function () {
  courseSchem.tutSch.find({} ,function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });

},

getTutorials: function (subject, catalog) {
  courseSchem.tutSch.find({'subject': subject, 'catalog': catalog} 
  ,'subject catalog componentCode section'
  ,function(err, result){
    if(err){
      console.log("Error!")
    }else{
      console.log(result);
    }
  });

},

getSections: function () {

},

getSections: function (subject, catalog) {

},

getCoPreRequisites:function () {

},

getCoPreRequisites: function (subject, catalog) {

},

getDescriptions: function () {

},

getDescriptions: function (subject, catalog) {

},

getUserRecord: function () {

},

putUserRecord: function () {

},

getUserSchedule: function () {

},

putUserSchedule: function () {

}
};




