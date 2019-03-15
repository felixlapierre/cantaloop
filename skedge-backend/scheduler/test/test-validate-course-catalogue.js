var expect = require('chai').expect;
var validator = require('./../validate-course-catalogue.js');


var someValidClass;
var someValidSection;
var someValidCourse;

describe('ValidateCourseProperties', () => {
    before( () => {
        someValidClass = {"time_start":"8:45","time_end":"10:00","days":"TuTh" };

        someValidSection = {
            'lecture' : someValidClass,
            'tutorial' : someValidClass,
            'lab' : someValidClass
        };

        someValidCourse = {
            'prerequisites' : [],
            "corequisite" : [],
            "credits" : 3.5,
            "fall" : [someValidSection],
            "winter" : [someValidSection],
            'summer' : []
        };
    });

    it('should produce an error when a course has the property prerequisites that is undefined', ()=>{
        // Arrange
        var someCourseContainingNonArrayPrerequisite = someValidCourse;
        someCourseContainingNonArrayPrerequisite['prerequisites'] = undefined;
        
        // Act & Assert
        expect( () => validator.ValidateCourseProperties(someCourseContainingNonArrayPrerequisite, "parameterName")).to.throw("InvalidCoursePropertyException");
    });

    it('should produce an error when a course has the property credits that is undefined', ()=> {
        // Arrange
        var someCourseContainingNanCredit = someValidCourse;
        someCourseContainingNanCredit['credits'] = undefined;
        
        // Act & Assert
        expect( () => validator.ValidateCourseProperties(someCourseContainingNanCredit, "parameterName")).to.throw("InvalidCoursePropertyException");
    });

    it('should produce an error when a section has the property lecture that is undefined', ()=> {
        // Arrange
        var someSectionContainingUndefinedLectureProperty = someValidSection;
       delete someSectionContainingUndefinedLectureProperty['lecture'];
        
        // Act & Assert
        expect( () => validator.ValidateSection(someSectionContainingUndefinedLectureProperty, "someSeason", 'someCourseID', 'someEntryNumber')).to.throw("CourseSectionInvalidPropertyException");
    });

    it('should produce an error when the course catalogue is undefined', ()=> {
        // Arrange
        var someCourseCatalogue;
        
        // Act & Assert
        expect( () => validator.ValidateCourseCatalogue(someCourseCatalogue)).to.throw("CatalogueUndefinedException");
    });

    
});