const mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema({

            studentID: String,
            year : Number,
            season:String,
            credits: Number,
            Schedules: Array(section)


})

module.exports = {
    scheduleSchema : mongoose.model('userSchedule', scheduleSchema)
}
