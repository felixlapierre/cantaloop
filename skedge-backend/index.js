const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const port = 4200;

// Services
const endpoint_service = require('./database/services/endpoint-service');
const Scheduler = require('./scheduler/scheduler');
var scheduler_service = new Scheduler();
const db_response_cleanup = require('./web_api_utilities/db_response_cleanup');
const rsa_encryption = require('./web_api_utilities/rsa-encryption');

const CourseDescription = require('./database/schemas/courseDescriptionSchema');
// Only for testing frontend until builder is ready to go.
const testSchedule = require('./web_api_utilities/testSchedules');
const UserRecordSequenceSchema = require('./database/schemas/userRecordSequenceSchema');

// User authentication
const User = require('./database/schemas/userSchema');
const scheduleSchema = require('./database/schemas/scheduleSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const checkAuth = require('./middlewares/check-auth');
const decrypt_req = require('./middlewares/decrypt-requests');

 //////////////////////
// Express Middlewares

// Using CORS to allow getting public key from pastebin.
var whitelist = ['http://localhost:4200','http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());
// Using bodyParser.json() to automatically parse the body of
// incoming requests.
app.use(bodyParser.json());
app.use(decrypt_req);
// Using express.static to serve the React frontend at root.
app.use(express.static(path.join(__dirname, '../skedge-frontend/build')));


 ///////////////////
// Express Enpoints


// This is an example of basic use of the "checkAuth" middleware

app.post('/test/secureEndpoint', checkAuth, (req, res) => {
    return res.status(200).json({
        message: "Get Endpoint was able to access this message",
        secure: "This endpoint works and has no profanity."
    });
});


// Returns a JSON object containing a list of all courses
app.get('/courses', (req, res) => {
    endpoint_service.getCoursesDescription()
    .then((courseList) =>{
        courseList = db_response_cleanup.cleanGetCoursesDescription(courseList);
        res.json(courseList);
    });
});

app.get('/courses/catalogue', (req, res) => {

    //Method has not been defined yet, but assuming that it will take the info directly from
    //MongoDB and it would return an array of all courses available with instances variable
    //such as Name, semester, nb of credits, timeslot etc.

    endpoint_service.getCourseCatalog()
    .then((courseList) =>{
        res.json(courseList);
    });

});

//Save Schedule
app.post('/users/saveSchedules', checkAuth, (req, res, next) => {

    //Method has not been defined yet, but assuming that it will take the info directly from
    //MongoDB and it would return an array of all courses available with instances variable
    //such as Name, semester, nb of credits, timeslot etc.
    let userID = req.body.authToken.userId;

    let userSchedule = new scheduleSchema({
        year : req.body.year,
        semesters: req.body.semesters,
        credits: req.body.credits,
        Schedules: req.body.Schedules,
        creator: userId
    })

    endpoint_service.saveSchedule(userSchedule)
    .then(result =>{
        res.status(201).json({
            message: "Schedule successfully saved!"
        });
    });

});

//Load schedule
app.post('/users/loadSchedules', checkAuth, (req, res, next)=>{
    let userID = req.body.authToken.userId;

    endpoint_service.loadSchedule(userID)
    .then((results)=>{
        res.json(results);
    })
})


// Returns a list of possible schedules for each semester
app.post('/builder/genSchedules', (req, res) => {
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

    let courseRecordIDArr = req.body.courseRecord;
    let courseSequenceIDArr = req.body.courseSequence;
    let semestersArr = req.body.semesters;

    let generatedSchedules;
    try {
        generatedSchedules = scheduler_service.GenerateSchedules(courseRecorIDdArr, courseSequenceIDArr, semestersArr);
    } catch (error) {
        let theError = "Schedule Builder Error:"+error+"\n\n";
        console.log(theError);
        generatedSchedules = testSchedule; //{"error":"The Schedule Builder failed."};
    }
    
    res.json(generatedSchedules);
});

app.post('/users/register', (req, res, next) => {
    bcryptjs.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                username: req.body.username,
                password: hash
            });
            endpoint_service.createUser(user)
                .then(result => {
                    res.status(201).json({
                        message: "User Created!",
                        result: result
                    });
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({
                        error: error
                    });
                });
        });
});


app.post('/users/login', (req, res, next) => {
    let fetchedUser;
    User.findOne({username: req.body.username}).then(user => {
        if(!user){
            throw Error("User does not exist in database");
        }
        fetchedUser = user;
        return bcryptjs.compare(req.body.password, user.password)
    })
        .then(result => {
            if(!result){
                return res.status(401).json({
                    message: "Authorization failed!"
                });
            }
            const authToken = jwt.sign({username: fetchedUser.username, userId: fetchedUser._id},
                rsa_encryption.getRsaPrivateKey(), // Arbitrarily using private key as the HMAC key
                {expiresIn: '1h'});
            const wrapperToken = jwt.sign({authToken: authToken}, req.body.password);
            res.status(200).json({
                token: wrapperToken
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(401).json({
                message: "Authorization failed!"
            });
        });
});

// The following endpoints are secure endpoints
app.post('/users/saveRecAndSeq', checkAuth, (req, res, next) => {
    
    let userId = req.body.authToken.userId;

    const userRecord = new UserRecordSequenceSchema({
        courseRecord: req.body.courseRecord,
        courseSequence: req.body.courseSequence,
        semesters: req.body.semesters,
        creator: userId
    });
    // Get rid of try catch once database function works
    try {
        endpoint_service.saveUserRecord(userRecord)
    .then(result => {
        res.status(201).json({
            message: "User record and sequence were saved in the database!"
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: "Sorry, could not save the record and sequence."
        });
    });
    } catch (error) {
        res.status(201).json({
            message: "This function is not available yet."
        });
    }
    
})

// "If there’s nothing, don’t crash." --> That should be ensured by the database?
app.post('/users/loadRecAndSeq', checkAuth, (req, res, next) => {
    let userId = req.body.authToken.userId;
    try {
        endpoint_service.getUserRecord(userId)
        .then((userRecord) => {
            userRecord = db_response_cleanup.cleanGetCoursesDescription(userRecord);
            res.json(userRecord);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "Sorry, could not load the course record and sequence."
            });
        });
    } catch (error) {
        res.status(201).json({
            message: "This function is not available yet."
        });
    }
    
})

 ////////////////////
// Express listener
app.listen(port, () => console.log(`Skedge listening on port ${port}!`));
