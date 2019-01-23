const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4200;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.put('/prototype', (req, res) => {
    console.log(req.body);
    ret_obj = req.body;
    ret_obj.name = "Hello from the backend!!!"
    res.json(ret_obj);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));