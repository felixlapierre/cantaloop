const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const port = 4200


app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.put('/prototype', (req, res) => {
    console.log(req.body)
    //ret_obj = {"name": "it worked bro!! -express.js"}
    res.json(req.body);
    //res.send({"response": req.body+", it worked!!"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))