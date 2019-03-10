let mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    session: String,
    subject: String,
    catalog: Number,
    section: Number,
    componentCode: String,
    courseTitle: String,
    locationCode: String,
    instructionModeCode: String,
    instructionModeDescription: String,
    meetingPatternNumber: Number,
    roomCode: String,
    buildingCode: String,
    room: Number,
    classStartTime: String,
    classEndTime: String,
    modays: String,
    tuesdays: String,
    wednesdays: String,
    thursdays: String,
    fridays: String,
    saturdays: String,
    sundays: String,
    classStartDate: String,
    classEndDate: String,
    career: String,
    enrollmentCapacity: Number
});


module.exports = mongoose.model('courses', courseSchema);