const mongoose = require('mongoose');

var courseSchem = require('./schemas/courseSchema');
var courseDescriptionSchema = require('./schemas/courseDescriptionSchema');
var courseCatalogSchema = require('./schemas/courseCatalogSchema');

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect("mongodb+srv://skedge-user:8sDBuOw3zMD4ZpQp@skedge-cantaloop-kueik.mongodb.net/skedge-app")
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

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

module.exports = new Database();

module.exports = {
    getCourseCatalog: function () {
        let p1 = new Promise((resolve, reject) => {
            courseCatalogSchema.courseCatalog.find({}, function (err, result) {
                if (err) {
                    console.log("None")
                } else {
                    console.log(result);
                }
            });
        });
        return p1;
    },

    getCoursesDescription: function () {
        let p1 = new Promise((resolve, reject) => {
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

    getCourses: function (subject, catalog) {
        let p1 = new Promise((resolve, reject) => {
            courseSchem.courseSch.find({'subject': subject, 'catalog': catalog}
                , 'subject catalog componentCode section'
                , function (err, result) {
                    if (err) {
                        console.log("Error!")
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

    getLabs: function (subject, catalog) {
        courseSchem.labSch.find({'subject': subject, 'catalog': catalog}
            , 'subject catalog componentCode section'
            , function (err, result) {
                if (err) {
                    console.log("Error!")
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

    getLectures: function (subject, catalog) {
        courseSchem.lecSch.find({'subject': subject, 'catalog': catalog}
            , 'subject catalog componentCode section'
            , function (err, result) {
                if (err) {
                    console.log("Error!")
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

    getTutorials: function (subject, catalog) {
        courseSchem.tutSch.find({'subject': subject, 'catalog': catalog}
            , 'subject catalog componentCode section'
            , function (err, result) {
                if (err) {
                    console.log("Error!")
                } else {
                    console.log(result);
                }
            });
    },

    insertOneInDatabase: function (objectJSON) {
        mongoose.connection.collection('courses').insertOne(objectJSON, function (err, result) {
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
