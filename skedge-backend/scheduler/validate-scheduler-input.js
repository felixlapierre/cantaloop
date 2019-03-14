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

function ThrowSchedulerInputFormatException(message)
{
    throw {
        name: "SchedulerInputFormatException",
        message: "SchedulerInputFormatException: " + message
    }
}

module.exports = {};
module.exports.ValidateParameterIsArrayOfCourseIds = ValidateParameterIsArrayOfCourseIds;