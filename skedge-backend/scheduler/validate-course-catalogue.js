function ValidateCourseCatalogue(courseCatalogue)
{
    if (courseCatalogue === undefined)
        ThrowCatalogueUndefinedException("Course catalogue is undefined");

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
        ThrowInvalidCoursePropertyException("Property "+ parameterName+" of "+courseID+" provided in Course Catalogue was not an array");
    }
}
function ValidateCoursePropertyIsNumber(parameter, parameterName, courseID)
{
    if ( isNaN(parameter)) 
    {
        ThrowInvalidCoursePropertyException("Property "+ parameterName+" of "+courseID+" provided in Course Catalogue was not a number");
    }
}
function ValidateSectionList(sectionList, sectionSeason, courseID)
{
    for(const entryNumber in sectionList){
        ValidateSection(sectionList[entryNumber], sectionSeason, courseID, entryNumber)
    } 
    
}
function ValidateSection(section, sectionSeason, courseID, entryNumber)
{
    if (!section.hasOwnProperty('lecture')) 
        {
            ThrowCourseSectionInvalidPropertyException("Property lecture of "+courseID+" "+ sectionSeason +" entry "+entryNumber+" not found" );
        }
        if (!section.hasOwnProperty('tutorial')) 
        {
            ThrowCourseSectionInvalidPropertyException("Property tutorial of "+courseID+" "+ sectionSeason +" entry "+entryNumber+" not found" );
        }
        if (!section.hasOwnProperty('lab')) 
        {
            ThrowCourseSectionInvalidPropertyException("Property lab of "+courseID+" "+ sectionSeason +" entry "+entryNumber+" not found" );
        }
            
}
function ThrowCatalogueUndefinedException(message)
{
    throw {
        name: "CatalogueUndefinedException",
        message: "CatalogueUndefinedException: " + message
    }
}
function ThrowInvalidCoursePropertyException(message)
{
    throw {
        name: "InvalidCoursePropertyException",
        message: "InvalidCoursePropertyException: " + message
    }
}
function ThrowCourseSectionInvalidPropertyException(message)
{
    throw {
        name: "CourseSectionInvalidPropertyException",
        message: "CourseSectionInvalidPropertyException: " + message
    }
}

module.exports = {};
module.exports.ValidateCourseProperties = ValidateCourseProperties;
module.exports.ValidateSection = ValidateSection;
module.exports.ValidateCourseCatalogue = ValidateCourseCatalogue;