var expect = require('chai').expect;
var mutate = require("../mutate.js");
var individual = require("../individual.js");

describe('mutate', function(){
    it('should create new offspring with different allele', function(){
        //arrange
        var semester = {
            "COMP346" : "SomeSectionA",
            "SOEN341" : "SomeSectionA",
            "SOEN331" : "SomeSectionA"
        };
        var parent =individual(semester);
        console.log("Semester"+ semester);
        
        var sectionList = {
            "COMP346" : ["SomeSectionA", "SomeSectionB", "SomeSectionC"],
            "SOEN341" : ["SomeSectionA", "SomeSectionB"],
            "SOEN331" : ["SomeSectionA", "SomeSectionB"]
        }

        //act
        var child = mutate(parent, sectionList);

        //assert
        expect(child).to.satisfy(function(child){
            return !(child.semester["COMP346"].equals(parent.semester["COMP346"])
                && child.semester["SOEN341"].equals(parent.semester["SOEN341"])
                && child.semester["SOEN331"].equals(parent.semester["SOEN331"]));
        })
        
    });
});