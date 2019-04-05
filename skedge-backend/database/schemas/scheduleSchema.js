const mongoose = require('mongoose');
let courseSection = require('./courseCatalogSchema');


const scheduleSchema = new mongoose.Schema({
    
            year : {type: Number},
            semester:{type: String},
            credits: {type: Number},
            Schedules: {type: Array},
            creator: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}   
})

module.exports = {
    scheduleSchema : mongoose.model('userSchedule', scheduleSchema)
}