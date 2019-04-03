const mongoose = require('mongoose');
let courseSection = require('./courseCatalogSchema');


const scheduleSchema = new mongoose.Schema({
    
            studentID: String,
            year : Number,
            season:String,
            credits: Number,
            Schedules: Array(courseSection.sectionSchema),
            creator: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}


    
})

module.exports = {
    scheduleSchema : mongoose.model('userSchedule', scheduleSchema)
}