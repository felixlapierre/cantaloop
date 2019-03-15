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
var courseDescriptionSchema = require('./courseDescriptionSchema');
var courseCatalogSchema = require('./courseCatalogSchema');


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

//Removes all duplicate instances of a course
function removeDuplicate(myArray) {
  let result = [];
  let duplicate = false;
  for (let elements in myArray){
    for (i = 0; i < result.length; i++){
      if (myArray[elements].courseTitle==result[i].courseTitle) {
        duplicate = true;
      }
    }
    if (duplicate == false){
      result.push(myArray[elements]);
    }
    duplicate = false;
  }
  return result;
}

module.exports = new Database();

module.exports = {
getCourseCatalog: function () {
  courseCatalogSchema.courseCatalog.find({}, function(err, result){
    if(err){
      console.log("None")
    }else{
      console.log(result);
    }
  });
},

getCoursesDescription: function () {
  var resultToSend;
  let p1 = new Promise((resolve, reject) =>{
    courseDescriptionSchema.courseDescription.find({}, function(err, result){
        if(err){
            console.log("None")
        }else{
            //console.log(result);
            resultToSend = result;
            resolve(result);
        }
    });
  });

  return p1;
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

}
};
