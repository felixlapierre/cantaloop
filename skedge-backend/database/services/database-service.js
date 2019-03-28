const mongoose = require('mongoose');

var courseSchem = require('../schemas/courseSchema');
var courseDescriptionSchema = require('../schemas/courseDescriptionSchema');
var courseCatalogSchema = require('../schemas/courseCatalogSchema');

var testing = require('../PopulateDatabase/courseCatalog');

mongoose.connect("mongodb+srv://skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net/skedge-app")
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })

function removeDuplicateCourses(myArray) {
    let result = [];
    let duplicate = false;
    for (let elements in myArray) {
        for (i = 0; i < result.length; i++) {
            if (myArray[elements].courseTitle == result[i].courseTitle) {
                duplicate = true;
            }
        }
        if (duplicate == false) {
            result.push(myArray[elements]);
        }
        duplicate = false;
    }
    return result;
}

module.exports = {
    getCourseCatalog: function () {
        // console.log(testing.makeArrayCourses('ENGR','213'));
        console.log(testing.getSections('ENGR','213'));

        // let p1 = new Promise((resolve, reject) => {
        //     testing.makeTrios([ { startTime: '11:45', endTime: '13:00', day: 'MoWe' },
        // { startTime: '08:45', endTime: '10:00', day: 'WeFr' },
        // { startTime: '10:15', endTime: '11:30', day: 'Tu' },
        // { startTime: '11:45', endTime: '13:00', day: 'WeFr' },
        // { startTime: '08:45', endTime: '10:00', day: 'WeFr' },
        // { startTime: '10:15', endTime: '11:30', day: 'Tu' },
        // { startTime: '17:45', endTime: '20:15', day: 'Fr' },
        // { startTime: '14:45', endTime: '16:00', day: 'Tu' },
        // { startTime: '14:45', endTime: '16:00', day: 'Tu' },
        // { startTime: '14:45', endTime: '16:00', day: 'Tu' },
        // { startTime: '14:45', endTime: '16:00', day: 'WeFr' } ],[], [ { startTime: '13:15', endTime: '14:55', day: 'Fr' },
        // { startTime: '13:15', endTime: '14:55', day: 'Fr' },
        // { startTime: '08:20', endTime: '10:00', day: 'Mo' },
        // { startTime: '08:20', endTime: '10:00', day: 'Mo' },
        // { startTime: '13:15', endTime: '14:55', day: 'Mo' },
        // { startTime: '13:15', endTime: '14:55', day: 'Mo' },
        // { startTime: '14:15', endTime: '15:55', day: 'Fr' },
        // { startTime: '14:15', endTime: '15:55', day: 'Mo' },
        // { startTime: '13:45', endTime: '15:25', day: '' },
        // { startTime: '08:20', endTime: '10:00', day: 'Mo' },
        // { startTime: '13:15', endTime: '14:55', day: 'Mo' },
        // { startTime: '13:15', endTime: '14:55', day: 'Mo' },
        // { startTime: '15:45', endTime: '17:25', day: 'Fr' },
        // { startTime: '15:45', endTime: '17:25', day: 'Fr' },
        // { startTime: '18:00', endTime: '19:40', day: 'Mo' },
        // { startTime: '17:45', endTime: '19:25', day: 'Fr' },
        // { startTime: '16:10', endTime: '17:50', day: 'Mo' },
        // { startTime: '17:45', endTime: '19:25', day: 'Fr' },
        // { startTime: '15:45', endTime: '17:25', day: 'Fr' },
        // { startTime: '15:45', endTime: '17:25', day: 'Fr' },
        // { startTime: '16:10', endTime: '17:50', day: 'Fr' },
        // {startTime: '18:00', endTime: '19:40', day: 'Mo' } ] )
        // resolve(console.log("worked?"));
    // })
        // return p1;
        // let p1 = new Promise((resolve, reject) => {
        //     courseCatalogSchema.courseCatalog.find({}, function (err, result) {
        //         if (err) {
        //             console.log("None")
        //         } else {
        //             console.log(result);
        //             resolve(result);
        //         }
        //     });
        // });
        // return p1;
        // testing.makeArrayCourses('ENGR','213');
    },

    getCoursesDescription: function () {
        let p1 = new Promise4((resolve, reject) => {
            courseDescriptionSchema.courseDescription.find({}, function (err, result) {
                if (err) {
                    console.log("None")
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
        return p1;
    },

    getCourses: function () {
        let p1 = new Promise((resolve, reject) => {
            courseSchem.courseSch.find({}, function (err, result) {
                if (err) {
                    console.log("None")
                } else {
                    console.log(result);
                }
            });
        });
    },

    getLabs: function () {
        courseSchem.labSch.find({}, function (err, result) {
            if (err) {
                console.log("None")
            } else {
                console.log(result);
            }
        });
    },

    getLectures: function () {
        courseSchem.lecSch.find({}, function (err, result) {
            if (err) {
                console.log("None")
            } else {
                console.log(result);
            }
        });
    },

    getTutorials: function () {
        courseSchem.tutSch.find({}, function (err, result) {
            if (err) {
                console.log("None")
            } else {
                console.log(result);
            }
        });
    },

    insertOneInDatabase: function (objectJSON, collectionName) {
        mongoose.connection.collection(collectionName).insertOne(objectJSON, function (err, result) {
            if (err) {
                console.log("Error, fail");
            } else {
                console.log("Successfully added into database!");
            }
        })
    },

    insertManyInDatabase: function (objectJSON, collectionName) {
        mongoose.connection.collection(collectionName).insertMany(objectJSON, function (err, result) {
            if (err) {
                console.log("Error, fail");
            } else {
                console.log("Successfully added into database!");
            }
        })
    }

};
