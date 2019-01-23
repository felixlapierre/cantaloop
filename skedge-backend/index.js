const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4200;

 //////////////////////
// Express Middlewares

// Using CORS to allow local host to be the client and server.
app.use(cors());
// Using bodyParser.json() to automatically parse the body of 
// incoming requests.
app.use(bodyParser.json());


 ///////////////////
// Express Enpoints

// Simple hello word GET endpoint at the root
app.get('/', (req, res) => res.send('Hello World!'));

// PUT /prototype endpoint from prototype meeting
app.put('/prototype', (req, res) => {

    // Prints request to console
    console.log(req.body);
    
    // Appends message to json payload
    ret_obj = req.body;
    ret_obj.msg = "Hello from the express backend!!!";

    // Responds with modified json payload
    res.json(ret_obj);
})


 ////////////////////
// Express listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`));