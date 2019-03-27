const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const port = 4200;

const endpoint_service = require('./database/services/endpoint-service');
const db_response_cleanup = require('./web_api_utilities/db_response_cleanup');

// Data for testing endpoint /generateSchedules
const generatedSchedules = require('./generatedSchedules');
const infoForScheduleGenerator = require('./infoForScheduleGenerator');


// const courseDescriptions.js = require('./courseDescriptions.js')


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



// getName endpoint, it will return a json object containing a list of all courses
app.get('/courses/getNames', (req, res) => {

    //Method has not been defined yet, but assuming that it will take the info directly from
    //MongoDB and it would return an array of all courses available with instances variable
    //such as Name, semester, nb of credits, timeslot etc.
    //Not sure if the method would take in an input??


    endpoint_service.getCoursesDescription()
    .then((courseList) =>{
        courseList = db_response_cleanup.cleanGetCoursesDescription(courseList);
        res.json(courseList);
    });


}
);

app.get('/courses/catalogue', (req, res) => {

    //Method has not been defined yet, but assuming that it will take the info directly from
    //MongoDB and it would return an array of all courses available with instances variable
    //such as Name, semester, nb of credits, timeslot etc.
    //Not sure if the method would take in an input??


    courseList = endpoint_service.getCourseCatalog()
    
    .then((courseList) =>{
        courseList = db_response_cleanup.cleanGetCoursesDescription(courseList);
        res.json(courseList);
    });


}
);

app.post('/genSchedules', (req, res) => {
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


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../skedge-frontend/build/index.html'));
});


 ////////////////////
// Express listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
