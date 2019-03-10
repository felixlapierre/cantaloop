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
let courseModel = require('./courseSchem');



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

/////TESTING with hardcoded course//////////
///So the following code here works/////////

let course1 = new courseModel (
    {
        session: "13W",
        subject: "BIOL",
        catalog: "201",
        section: "50",
        componentCode: "LEC",
        courseTitle: "INTRODUCTORY BIOLOGY",
        locationCode: "LOY",
        instructionModeCode: "P",
        instructionModeDescription: "In Person",
        meetingPatternNumber: "1",
        roomCode: "CC320",
        buildingCode: "CC",
        room: "320",
        classStartTime: "18.30.00",
        classEndTime: "21.00.00",
        modays: "N",
        tuesdays: "Y",
        wednesdays: "N",
        thursdays: null,
        fridays: "N",
        saturdays: "N",
        sundays: "N",
        classStartDate: "07/05/2014",
        classEndDate: "19/08/2014",
        career: "Undergraduate",
        enrollmentCapacity: "72"
    }   
)
course1.save()
    .then(doc => {
        console.log(doc)
    })
    .catch( err => {
        console.log("errorr")
    })




