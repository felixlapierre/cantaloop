var expect = require("chai").expect;
var rankCourses = require("../../course-placement/rank-courses");

describe('rankCourses', function() {
    it('should include classes that are not prereqs or coreqs in the rankings', () => {
        //Arrange
        var someCourseList = ["COMP101","SOEN101"];
        var someSequenceNoPrerequisites = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "SOEN101": {
                "prerequisites": [],
                "corequisites": []
            }
        }

        //Act
        var ranks = rankCourses(someCourseList, someSequenceNoPrerequisites);

        //Assert
        expect(ranks).to.include.members(["SOEN101","COMP101"]);
    });

    it('should highly rank classes that are prerequisites', () => {
        //Arrange
        var someCourseList = ["COMP102", "COMP101"];
        var someSequenceWithPrerequisites = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "COMP102": {
                "prerequisites": ["COMP101"],
                "corequisites": []
            }
        }

        //Act
        var ranks = rankCourses(someCourseList, someSequenceWithPrerequisites);

        //Assert
        expect(ranks).to.deep.equal(["COMP101","COMP102"]);
    });

    
    it('should highly rank classes that are corequisites', () => {
        //Arrange
        var someCourseList = ["COMP101", "COMP102"];
        var someSequenceWithCorequisites = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "COMP102": {
                "prerequisites": [],
                "corequisites": ["COMP101"]
            }
        }

        //Act
        var ranks = rankCourses(someCourseList, someSequenceWithCorequisites);

        //Assert
        expect(ranks).to.deep.equal(["COMP101","COMP102"]);
    });

    it('should highly rank classes that are first in a prerequisite chain', () => {
        //Arrange
        var someCourseList = ["COMP102", "COMP101", "COMP103"];
        var someSequenceWithPrereqisiteChain = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "COMP102": {
                "prerequisites": ["COMP101"],
                "corequisites": []
            },
            "COMP103": {
                "prerequisites": ["COMP102"],
                "corequisites": []
            }
        }

        //Act
        var ranks = rankCourses(someCourseList, someSequenceWithPrereqisiteChain);

        //Assert
        expect(ranks).to.deep.equal(["COMP101","COMP102","COMP103"]);
    });

    it('should highly rank classes that are corequisites ', () => {
        //Arrange
        var someCourseList = ["COMP101", "COMP102", "COMP103"];
        var someSequenceWithPrereqisiteChain = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "COMP102": {
                "prerequisites": [],
                "corequisites": ["COMP101"]
            },
            "COMP103": {
                "prerequisites": [],
                "corequisites": ["COMP102"]
            }
        }

        //Act
        var ranks = rankCourses(someCourseList, someSequenceWithPrereqisiteChain);

        //Assert
        expect(ranks).to.deep.equal(["COMP101","COMP102","COMP103"]);
    })

    it('should increase the rank of a class twice if a class depends on it twice', () => {
        //Arrange
        var someCourseList = ["COMP202","COMP102","COMP201","COMP101"];
        var someSequenceWithDoubleDependency = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "COMP102": {
                "prerequisites": [],
                "corequisites": ["COMP101"]
            },
            "COMP201": {
                "prerequisites": ["COMP102"],
                "corequisites": []
            },
            "COMP202": {
                "prerequisites": ["COMP201"],
                "corequisites": ["COMP102"]
            }
        }

        //Act
        var ranks = rankCourses(someCourseList, someSequenceWithDoubleDependency);

        //Assert
        expect(ranks[0]).to.equal("COMP101");
        expect(ranks[3]).to.equal("COMP202");
        expect(ranks).to.include.members(["COMP102","COMP201"]);
    })

    it('should only rank up based on classes in the course list', () => {
        //Arrange
        var someCourseListOmittingSomeCourses = ["COMP101","COMP102"];
        var someSequenceWithCoursesNotInList = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "COMP102": {
                "prerequisites": [],
                "corequisites": ["COMP101"]
            },
            "SOEN101": {
                "prerequisites": [],
                "corequisites": []
            },
            "SOEN102": {
                "prerequisites": ["SOEN101"],
                "corequisites": []
            },
            "SOEN103": {
                "prerequisites": ["SOEN102"]
            }
        }

        //Act
        var ranks = rankCourses(someCourseListOmittingSomeCourses, someSequenceWithCoursesNotInList);

        //Assert
        expect(ranks[0]).to.equal("COMP101");
    })
});

