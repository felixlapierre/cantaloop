const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 80



app.get('/', (req, res) => res.send('Hello World!'))
app.put('/prototype', (req, res) => {
    console.log(req.body)
    helloObject = JSON.parse(req.body)
    res.send({"response": helloObject["name"]+", it worked!!"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))