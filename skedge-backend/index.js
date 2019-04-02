const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const port = 4200;


const endpoint_service = require('./database/services/endpoint-service');
const Scheduler = require('./scheduler/scheduler');
var scheduler_service = new Scheduler();
const db_response_cleanup = require('./web_api_utilities/db_response_cleanup');
const rsa_encryption = require('./web_api_utilities/rsa-encryption');



const User = require('./database/schemas/userSchema');
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

app.get('/secureEndpoint', checkAuth, (req, res) => {
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

    let courseRecord = req.body.courseRecord;
    let courseSequence = req.body.courseSequence;
    let semesters = req.body.semesters;

    let generatedSchedules;
    try {
        generatedSchedules = scheduler_service.GenerateSchedules(courseRecord, courseSequence, semesters);
    } catch (error) {
        let theError = "Schedule Builder Error:"+error+"\n\n";
        console.log(theError);
        generatedSchedules = {"error":"The Schedule Builder failed."};
    }
    
    res.json(generatedSchedules);
});

app.post('/users/register', (req, res, next) => {
    req.body = rsa_encryption.decryptStringWithRsaPrivateKey(req.body);
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
                    res.status(500).json({
                        error: error
                    });
                });
        });
});


app.post('/users/login', (req, res, next) => {
    console.log(req.body);
    let encrypted_username = req.body.username_rsa;
    console.log("------------------------------------------------------\n\n\n\n\n\n\n\n\n\n\n\n"+encrypted_username);
    console.log(rsa_encryption.decryptStringWithRsaPrivateKey(encrypted_username)+"\n\n\n\n\n\n\n\n\n\n\n\n\n------------------------------------------------------------------------------");
    let fetchedUser;
    User.findOne({username: req.body.username}).then(user => {
        if(!user){
            return res.status(401).json({
                message: "Authorization failed!"
            });
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
            const token = jwt.sign({username: fetchedUser.username, userId: fetchedUser._id},
                "secret_this_should_be_longer",
                {expiresIn: '1h'});
            
            res.status(200).json({
                token: token
            });
        })
        .catch(error => {
            return res.status(401).json({
                message: "Authorization failed!"
            });
        });
});

 ////////////////////
// Express listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
