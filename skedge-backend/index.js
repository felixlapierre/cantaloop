const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const database_service = require('./database-service');
const port = 4200;

// Data for testing endpoint /generateSchedules
const generatedSchedules = require('./generatedSchedules');
const infoForScheduleGenerator = require('./infoForScheduleGenerator');


 //////////////////////
// Express Middlewares

// Using CORS to allow local host to be the client and server.
app.use(cors());
// Using bodyParser.json() to automatically parse the body of 
// incoming requests.
app.use(bodyParser.json());
// Using express.static to serve the React frontend at root.
app.use(express.static(path.join(__dirname, '../skedge-frontend/build')));


 ///////////////////
// Express Enpoints

// prototype endpoint
app.put('/prototype', (req, res) => {
    console.log(req.body);

    // Sends course to database with name from json payload
    var db_msg = database_service.writeCourseToDatabase(req.body.name);

    // Appends message to json payload
    ret_obj = req.body;
    ret_obj.msg = db_msg;

    // Responds with modified json payload
    res.json(ret_obj);
    
});

app.post('/generateSchedules', (req, res) => {
    // TESTING

    // Empty input
    // Missing information (semesters array is empty, etc.)
    // CourseRecord must be an array of strings (valid if matches with one of the courses in the database)
    // CourseSequence must be an array of valid strings (valid if matches with one of the courses in the database)
    // In Semesters, 
    // year should be a number and it should be >= 2019
    // season should be either "Fall", "Winter" or "Summer"
    // credits should be a number, any restrictions for credits (bond de .5 seulements)????
    // numCourses should be an integer

    var courseRecord = req.body.courseRecord;
    var courseSequence = req.body.courseSequence;
    var semesters = req.body.semesters;

    //var generatedSchedules = scheduler.GenerateSchedules(courseRecord, courseSequence, semesters); // returns an array of schedules for each semester
    
    res.json(generatedSchedules);
});


 ////////////////////
// Express listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`));