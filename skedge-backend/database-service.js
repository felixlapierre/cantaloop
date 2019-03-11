//
//
// This module is only for the prototype.
// It can be deleted by the database team whenever they're ready.
//
//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connected to MongoDB!!!");
});

const courseSchema = new Schema({
    id: ObjectId,
    name: String,
    credits: Number
});
const CourseModel = mongoose.model("Course", courseSchema);


mongoose.connect("mongodb+srv://skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net/skedge-app");

module.exports = {
    writeCourseToDatabase: function(value) {
        var course = new CourseModel({
            name: value,
            credits: 3
        });
        if (db.readyState == 1) {
            course.save(function (err, course) {
                if (err) return console.error(err);
            });
            return "Sent "+value+" to the database!";
        }
        else{
            return "Couldn't save "+value+", DB isn't ready."
        }
    }
}
