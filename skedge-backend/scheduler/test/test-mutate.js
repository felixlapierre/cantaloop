var expect = require('chai').expect;
var mutate = require("../mutate.js");
var individual = require("../individual.js");

describe('mutate', function(){
    it('should create new offspring with different allele', function(){
        // arrange
        var semester = {
            "COMP346" : "SomeSectionA",
            "SOEN341" : "SomeSectionA",
            "SOEN331" : "SomeSectionA"
        };
        var parent = new individual(semester);    
        var sectionList = {
            "COMP346" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"],
            "SOEN341" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"],
            "SOEN331" : ["SomeSectionA", "SomeSectionB", "SomeSectionC", "SomeSectionD","SomeSectionE","SomeSectionF","SomeSectionG"]
        }

        // act
        var child = mutate(parent, sectionList);
        console.log(child.semester);
        
        // assert
        expect(child).to.satisfy(function(child){
            return !(child.semester["COMP346"].valueOf() == (parent.semester["COMP346"]).valueOf()
                && child.semester["SOEN341"].valueOf() == (parent.semester["SOEN341"]).valueOf()
                && child.semester["SOEN331"].valueOf() == (parent.semester["SOEN331"]).valueOf());
        })
        
    });
});