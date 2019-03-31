const mongoose = require('mongoose');

const courseSchem = require('../schemas/courseSchema');
const courseDescriptionSchema = require('../schemas/courseDescriptionSchema');
const courseCatalogSchema = require('../schemas/courseCatalogSchema');

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
      
       let p1 = new Promise ( (resolve,reject)=>{
           courseCatalogSchema.courseCatalog.find({}, function(err, result){
               if(err){
                   return err;
               }else{
                   console.log(result);
                   resolve(result);
               }
           });
        
        });  
        return (p1);
    },

    getCoursesDescription: function () {
        let p1 = new Promise((resolve, reject) => {
            courseDescriptionSchema.courseDescription.find({ }, function (err, result) {
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
