let mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    termCode: String,
    session: String,
    subject: String,
    catalog: String,
    section: String,
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


module.exports = {
    courseSch : mongoose.model('courses', courseSchema),
    lecSch:  mongoose.model('lectures', courseSchema),
    tutSch: mongoose.model('tutorials', courseSchema),
    labSch: mongoose.model('labs', courseSchema)
}