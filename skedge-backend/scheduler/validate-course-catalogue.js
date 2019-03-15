function ValidateCourseCatalogue(courseCatalogue)
{
    
    for (const courseID in courseCatalogue) {
        if (courseCatalogue.hasOwnProperty(courseID)) {
        ValidateCourse(courseCatalogue[courseID], courseID);
        }
    }
}

function ValidateCourse(course, courseID)
{
    ValidateCourseProperties(course, courseID);

    ValidateAllSectionLists(course, courseID);
}
function ValidateCourseProperties (course, courseID)
{
    ValidateCoursePropertyIsArray(course["prerequisites"], "prerequisites", courseID);
    ValidateCoursePropertyIsArray(course["corequisites"], "corequisites", courseID);
    ValidateCoursePropertyIsNumber(course["credits"], "credits", courseID);
    ValidateCoursePropertyIsArray(course["fall"], "fall", courseID);
    ValidateCoursePropertyIsArray(course["winter"], "winter", courseID);
    ValidateCoursePropertyIsArray(course["summer"], "summer", courseID);
    
}
function ValidateAllSectionLists(course, courseID)
{
    ValidateSectionList(course["fall"], "fall", courseID);
    ValidateSectionList(course["winter"], "winter", courseID);
    ValidateSectionList(course["summer"], "summer", courseID);
}
function ValidateCoursePropertyIsArray(parameter, parameterName, courseID)
{
    if (!(parameter instanceof Array)) 
    {
        ThrowCourseMissingPropertyException("Property "+ parameterName+" of "+courseID+" provided in Course Catalogue was not an array");
    }
}
function ValidateCoursePropertyIsNumber(parameter, parameterName, courseID)
{
    if ( isNaN(parameter)) 
    {
        ThrowCourseMissingPropertyException("Property "+ parameterName+" of "+courseID+" provided in Course Catalogue was not a number");
    }
}
function ValidateSectionList(sectionList, sectionSeason, courseID)
{
    for(const entryNumber in sectionList){
        if (!sectionList[entryNumber].hasOwnProperty('lecture')) 
        {
            ThrowCourseSectionMissingPropertyException("Property lecture of "+courseID+" "+ sectionSeason +" entry "+entryNumber+" not found" );
        }
        if (!sectionList[entryNumber].hasOwnProperty('tutorial')) 
        {
            ThrowCourseSectionMissingPropertyException("Property tutorial of "+courseID+" "+ sectionSeason +" entry "+entryNumber+" not found" );
        }
        if (!sectionList[entryNumber].hasOwnProperty('lab')) 
        {
            ThrowCourseSectionMissingPropertyException("Property lab of "+courseID+" "+ sectionSeason +" entry "+entryNumber+" not found" );
        }
    } 
    
}
function ThrowCourseMissingPropertyException(message)
{
    throw {
        name: "CourseMissingPropertyException",
        message: "CourseMissingPropertyException: " + message
    }
}
function ThrowCourseSectionMissingPropertyException(message)
{
    throw {
        name: "CourseSectionMissingPropertyException",
        message: "CourseSectionMissingPropertyException: " + message
    }
}

module.exports = {};
module.exports.ValidateCourseProperties = ValidateCourseProperties;
module.exports.ValidateSectionList = ValidateSectionList;
module.exports.ValidateCourseCatalogue = ValidateCourseCatalogue;