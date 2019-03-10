//
//
// This module is only for the prototype.
// It can be deleted by the database team whenever they're ready.
//
//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const assert = require('assert');


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

const courseSchema = new mongoose.Schema({
    session: string,
    subject: string,
    catalog: number,
    section: number,
    componentCode: string,
    courseTitle: string,
    locationCode: string,
    instructionModeCode: string,
    instructionModeDescription: string,
    meetingPatternNumber: number,
    roomCode: string,
    buildingCode: string,
    room: number,
    classStartTime: mixed,
    classEndTime: mixed,
    modays: mixed,
    tuesdays: mixed,
    wednesdays: mixed,
    thursdays: mixed,
    fridays: mixed,
    saturdays: mixed,
    sundays: mixed,
    classStartDate: mixed,
    classEndDate: mixed,
    career: mixed,
    enrollmentCapacity: number
});
const CourseModel = mongoose.model("Course", courseSchema);




const insertDocuments = function(db, callback){
	const collection = db.collection('courses');
	collection.insertMany([{a:1}, {a:2}], 
	function (err, result){
		assert.equal(err,null);
		assert.equal(2, result.result.n);
		assert.equal(2, result.ops.length);
		console.log("Inserted 2 courses successfully");
		callback(result);
	});
}


// module.exports = {
//     writeCourseToDatabase: function(value) {
//         var course = new CourseModel({
//             name: value,
//             credits: 3
//         });
//         if (db.readyState == 1) {
//             course.save(function (err, course) {
//                 if (err) return console.error(err);
//             });
//             return "Sent "+value+" to the database!";
//         }
//         else{
//             return "Couldn't save "+value+", DB isn't ready."
//         }
//     }
// }
