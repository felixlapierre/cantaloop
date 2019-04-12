let mongoose = require('mongoose');

const courseClass = new mongoose.Schema(
    {
        time_start: String,
        time_end: String,
        days: String,
    }
, {"_id":false, "id":false});

const section = new mongoose.Schema(
    {
        lecture: courseClass,
        lab: courseClass,
        tutorial: courseClass,
    }
, {"_id":false, "id":false});

const courseCatalog = new mongoose.Schema(
    {
        courseId: String,
        prerequisites: Array(String),
        corequisites: Array(String),
        credits: String,
        fall: Array(section),
        winter: Array(section),
        summer: Array(section)
    }
);

module.exports = {
    courseCatalog : mongoose.model('courseCatalog', courseCatalog, 'courseCatalogs'),
    section: mongoose.model('section', section, 'section'),
    class: mongoose.model('class', courseClass, 'courseClass')
}