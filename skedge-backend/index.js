//Server setup
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 4200;

//Database setup
const endpoint_service = require('./database/services/endpoint-service');
const db_response_cleanup = require('./web_api_utilities/db_response_cleanup');

//Setup scheduler
const Scheduler = require('./scheduler/scheduler');
var scheduler_service = null;
endpoint_service.getCourseCatalog()
.then((catalog) => scheduler_service = new Scheduler(catalog));

//User management and authentication
const User = require('./database/schemas/userSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const checkAuth = require('./middleware/check-auth');

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
// Express Endpoints

app.get('/secureEndpoint', checkAuth, (req, res) => {
    return res.status(200).json({
        message: "Get Endpoint was able to access this message",
        secure: "We secure AF BOOOOOOIIIIIIII"
    });
});

// Returns a JSON object containing a list of all courses
app.get('/courses/getNames', (req, res) => {
    endpoint_service.getCoursesDescription()
    .then((courseList) =>{
        courseList = db_response_cleanup.cleanGetCoursesDescription(courseList);
        res.json(courseList);
    });
});

// Returns a list of possible schedules for each semester
app.post('/builder/genSchedules', (req, res) => {
    if(scheduler_service === null)
    {
        res.status(500).send("Please try again later");
        return;
    }
    let courseRecord = req.body.courseRecord;
    let courseSequence = req.body.courseSequence;
    let semesters = req.body.semesters;

    try {
        var generatedSchedules = scheduler_service.GenerateSchedules(courseRecord, courseSequence, semesters);
        res.json(generatedSchedules);
    } catch (error) {
        console.log("An error occured in the scheduler: " + error.message);
        res.status(500).send("An error occured when trying to build the scheduler.");
    }
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
