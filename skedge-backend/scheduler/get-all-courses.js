var fs = require("fs");

function getAllCourses(filename)
{
    var content = JSON.parse(fs.readFileSync(filename)).courses;
    var courses = [];
    for(var key in content)
    {
        if(content.hasOwnProperty(key))
            courses.push(key);
    }
    return courses;
}

module.exports = getAllCourses;