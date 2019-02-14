var expect = require('chai');
//var requisites = require('../requisites')

describe('addMissingPrerequisitesAndCorequisites', () => {
    it('should add the prerequisite of a class', () => {
        //Arrange
        var catalog = {
            "COMP101": {
                "prerequisites": [],
                "corequisites": []
            },
            "COMP102": {
                "prerequisites": ["COMP101"],
                "corequisites": []
            }
        }
        var courseRecord = [];
        var courseSequence = ["COMP102"];
    });
})