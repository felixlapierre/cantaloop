//
//
// Everything related to connecting to MongoDB and manipulating the database
//
//
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
// const assert = require('assert');
// let courseModel = require('./courseSchem');
// fs = require('fs');


// const server = 'skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net';
// const database = 'skedge-app';


// class Database {
//     constructor() {
//       this._connect()
//     }
//   _connect() {
//        mongoose.connect("mongodb+srv://skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net/skedge-app")
//          .then(() => {
//            console.log('Database connection successful')
//          })
//          .catch(err => {
//            console.error('Database connection error')
//          })
//     }
//   }

//   module.exports = new Database();

    // const db = new Database();


/////TESTING with hardcoded course//////////
///So the following code here works/////////

//Hardcoded course to add to database
// let course1 = new courseModel (
//     {
//         session: "13W",
//         subject: "BIOL",
//         catalog: "201",
//         section: "50",
//         componentCode: "LEC",
//         courseTitle: "INTRODUCTORY BIOLOGY",
//         locationCode: "LOY",
//         instructionModeCode: "P",
//         instructionModeDescription: "In Person",
//         meetingPatternNumber: "1",
//         roomCode: "CC320",
//         buildingCode: "CC",
//         room: "320",
//         classStartTime: "18.30.00",
//         classEndTime: "21.00.00",
//         modays: "N",
//         tuesdays: "Y",
//         wednesdays: "N",
//         thursdays: null,
//         fridays: "N",
//         saturdays: "N",
//         sundays: "N",
//         classStartDate: "07/05/2014",
//         classEndDate: "19/08/2014",
//         career: "Undergraduate",
//         enrollmentCapacity: "72"
//     }   
// )
// //Saving it into the database
// course1.save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch( err => {
//         console.log("error")
//     })


 ///////////////////////////////////////////////////////////////////////////////   
/////// Trying to load a json file, parse it and save it into the database ////

var listCourse = fs.readFileSync('./coursesTesting.json', 'utf8', (err, data) => {
    if(err) throw err;
    return(listCourse);
});

var listConverted = JSON.parse(listCourse);

mongoose.connection.collection('courses').insertMany(listConverted, function( err, result){
    if(err){
        console.log("Error, fail");
    }else{
        console.log("yay reussi");
    }
})







