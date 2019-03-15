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
        ValidatePropertyOfSemesterIsNumber(semester.year, "year");
        ValidatePropertyOfSemesterIsNumber(semester.credits, "credits");
        ValidatePropertyOfSemesterIsNumber(semester.numCourses, "numCourses");

        var season = semester.season;
        if(!(["fall", "winter", "summer"].includes(season)))
        {
            ThrowSchedulerInputFormatException("A " + parameterName + " provided to the scheduler contained a semester with a season parameter that was not a valid season: " + season)
        }
    })
}

function ValidatePropertyOfSemesterIsNumber(parameter, parameterName)
{
    if(isNaN(parameter))
    {
        ThrowSchedulerInputFormatException("A Semester provided to the scheduler had a non-number " + parameterName + " parameter: " + parameter);
    }
}

function ValidateCourseIdsAreInCourseCatalog(list, catalog, parameterName)
{
    list.forEach(courseId => {
        if(catalog[courseId] === undefined)
        {
            ThrowSchedulerInputFormatException(parameterName + " contains course ID " + courseId + " that is not in the course catalog.");
        }
    })
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
module.exports.ValidateParameterIsArrayOfSemesters = ValidateParameterIsArrayOfSemesters;
module.exports.ValidateCourseIdsAreInCourseCatalog = ValidateCourseIdsAreInCourseCatalog;