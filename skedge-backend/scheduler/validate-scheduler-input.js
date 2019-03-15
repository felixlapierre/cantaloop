function ValidateParameterIsArrayOfCourseIds(parameter, parameterName)
{
    var courseIdRegExp = /[a-zA-Z]{4}[0-9]{3}/;

    if(!(parameter instanceof Array))
    {
        ThrowSchedulerInputFormatException("Parameter " + parameterName + " provided to scheduler was not an array.");
    }

    parameter.forEach(courseId => {
        if(typeof(courseId) != "string")
        {
            ThrowSchedulerInputFormatException("Parameter " + parameterName + " provided to scheduler contained non-string element " + courseId);
        }
        if(!courseId.match(courseIdRegExp))
        {
            ThrowSchedulerInputFormatException("Parameter " + parameterName + " provided to scheduler contained string \"" + courseId + "\" that did not match the format of a course ID");
        }
    })
}

function ValidateParameterIsArrayOfSemesters(parameter, parameterName)
{
    if(!(parameter instanceof Array))
    {
        ThrowSchedulerInputFormatException("Parameter " + parameterName + " provided to scheduler was not an array.");
    }

    parameter.forEach(semester => {
        ValidatePropertyOfSemesterIsOfType(semester.year, Number, "year");
        ValidatePropertyOfSemesterIsOfType(semester.credits, Number, "credits");
        ValidatePropertyOfSemesterIsOfType(semester.numCourses, Number, "numCourses");
        ValidatePropertyOfSemesterIsOfType(semester.restrictions, Array, "restrictions");

        var season = semester.season;
        if(!(["fall", "winter", "summer"].includes(season)))
        {
            ThrowSchedulerInputFormatException("A " + parameterName + " provided to the scheduler contained a semester with a season parameter that was not a valid season: " + season)
        }
    })
}

function ValidatePropertyOfSemesterIsOfType(parameter, type, parameterName)
{
    if(!(parameter instanceof type))
    {
        ThrowSchedulerInputFormatException("A Semester provided to the scheduler had a non-" + type + " " + parameterName + " parameter: " + parameter);
    }
}

function ThrowSchedulerInputFormatException(message)
{
    throw {
        name: "SchedulerInputFormatException",
        message: "SchedulerInputFormatException: " + message
    }
}

module.exports = {};
module.exports.ValidateParameterIsArrayOfCourseIds = ValidateParameterIsArrayOfCourseIds;