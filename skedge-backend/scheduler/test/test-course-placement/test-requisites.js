var expect = require('chai').expect;
var Requisites = require("../../course-placement/requisites");
var AddMissingPrerequisitesAndCorequisites = require("../../course-placement/add-missing-requisites");

var someCatalog = {
    "COMP101": {
        "prerequisites": [],
        "corequisites": []
    },
    "HasPrereq": {
        "prerequisites": ["COMP101"],
        "corequisites": []
    },
    "HasCoreq": {
        "prerequisites": [],
        "corequisites": ["COMP101"]
    },
    "HasExcludedPrereqs": {
        "prerequisites": ["MATH101", "PHYS101", "BIOL101"],
        "corequisites": []
    },
    "HasExcludedCoreqs": {
        "prerequisites": [],
        "corequisites": ["MATH101", "PHYS101", "BIOL101"]
    }
}

describe('addMissingPrerequisitesAndCorequisites', () => {
    it('should add the prerequisite of a class', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasPrereq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        AddMissingPrerequisitesAndCorequisites(someCatalog, courseSequence, requisites);

        //Assert
        expect(courseSequence).to.include.members(["COMP101"]);
    });

    it('should add the corequisite of a class', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasCoreq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        AddMissingPrerequisitesAndCorequisites(someCatalog, courseSequence, requisites);

        //Assert
        expect(courseSequence).to.include.members(["COMP101"]);
    });

    it('should not add prerequisites if they are MATH, PHYS or BIOL classes', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasExcludedPrereqs"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        AddMissingPrerequisitesAndCorequisites(someCatalog, courseSequence, requisites);

        //Assert
        expect(courseSequence).to.not.include.members(["MATH101", "PHYS101", "BIOL101"]);
    })

    it('should not add corequisites if they are MATH, PHYS or BIOL classes', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasExcludedCoreqs"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        AddMissingPrerequisitesAndCorequisites(someCatalog, courseSequence, requisites);

        //Assert
        expect(courseSequence).to.not.include.members(["MATH101", "PHYS101", "BIOL101"])
    })
})

describe('ArePrereqsCoreqsTaken', () => {
    it('should be false if a class\' prerequisite is not taken', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["COMP101", "HasPrereq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);    

        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasPrereq");

        //Assert
        expect(result).to.be.false;
    })

    it('should be false if a class\' corequisite is not taken', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["COMP101", "HasCoreq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasCoreq");

        //Assert
        expect(result).to.be.false;
    })

    it('should be true if a class\' prerequisite is taken', () => {
        //Arrange
        var courseRecord = ["COMP101"];
        var courseSequence = ["HasPrereq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasPrereq");

        //Assert
        expect(result).to.be.true;
    })

    it('should be true if a class\' corequisite is taken', () => {
        //Arrange
        var courseRecord = ["COMP101"];
        var courseSequence = ["HasCoreq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasCoreq");

        //Assert
        expect(result).to.be.true;
    })

    it('should be false if a class\' prerequisite is in progress', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["COMP101", "HasPrereq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);
        requisites.SetCourseInProgress("COMP101");
        
        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasPrereq");

        //Assert
        expect(result).to.be.false;
    })

    it('should be true if a class\' corequisite is in progress', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["COMP101", "HasCoreq"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);
        requisites.SetCourseInProgress("COMP101");

        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasCoreq");
        
        //Assert
        expect(result).to.be.true;
    });

    it('should be true if a class\' prerequisite is from math, physics or biology', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasExcludedPrereqs"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasExcludedPrereqs");

        //Assert
        expect(result).to.be.true;
    })

    it('should be true if a class\' corequisite is from math, physics or biology', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasExcludedCoreqs"];

        var requisites = new Requisites(someCatalog, courseRecord, courseSequence);

        //Act
        var result = requisites.ArePrereqsAndCoreqsTaken("HasExcludedCoreqs");

        //Assert
        expect(result).to.be.true;
    })
})