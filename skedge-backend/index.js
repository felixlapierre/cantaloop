const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const database_service = require('./database-service');
const port = 4200;


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
})


 ////////////////////
// Express listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`));