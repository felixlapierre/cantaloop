let mongoose = require('mongoose');

const courseDescription = new mongoose.Schema(
    {
        "_id": false,
        courseId: {
            name: String,
            description: String
        }
    }
);


module.exports = {
    courseDescription : mongoose.model('descriptions', courseDescription)
}