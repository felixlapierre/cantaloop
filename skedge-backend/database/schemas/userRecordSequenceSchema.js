const mongoose = require('mongoose');

const userRecordSequenceSchema = mongoose.Schema({
    courseRecord: {type: Array, required: true},
    courseSequence: {type: Array, required: true},
    semesters: {type: Array, required:true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model("userRecord", userRecordSequence);