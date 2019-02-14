var expect = require('chai').expect;
var GenomeSelector = require("../genome-selector");

var someCatalog = {
    "BasicClassA": {
        "prerequisites": [],
        "corequisites": [],
        "credits": 1
    },
    "BasicClassB": {
        "prerequisites": [],
        "corequisites": [],
        "credits": 2
    },
    "BasicClassC": {
        "prerequisites": [],
        "corequisites": [],
        "credits": 3
    },
    "HasClassACorequisite": {
        "prerequisites": [],
        "corequisites": ["BasicClassA"],
        "credits": 1
    },
    "HasClassBPrerequisite": {
        "prerequisites": ["BasicClassB"],
        "corequisites": [],
        "credits": 2
    }
}

var someSemesters = [
    {"year": 2018, "season": "fall"},
    {"year": 2019, "season": "winter"}
]

describe('selectGenomes', () => {
    it('should create empty genomes if no courses are selected', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = [];

        var genomeSelector = new GenomeSelector(someCatalog);

        //Act
        var genomes = genomeSelector.selectGenomes(courseRecord, courseSequence, someSemesters);

        //Assert
        for(var key in genomes)
        {
            if(genomes.hasOwnProperty(key))
            {
                expect(genomes[key]).to.be.empty;
            }
        }
    })

    it('should place a course after its prerequisite when placing one course per semester', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasClassBPrerequisite", "BasicClassB"];

        someSemesters[0].credits = 2;
        someSemesters[1].credits = 2;

        var genomeSelector = new GenomeSelector(someCatalog);

        //Act
        var genomes = genomeSelector.selectGenomes(courseRecord, courseSequence, someSemesters);

        //Assert
        expect(genomes["fall 2018"]).to.include.members(["BasicClassB"])
        expect(genomes["winter 2019"]).to.include.members(["HasClassBPrerequisite"]);
    })

    it('should place a course with its corequisite if possible', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = ["HasClassACorequisite", "BasicClassA"]
        someSemesters[0].credits = 2;
        someSemesters[1].credits = 2;

        var genomeSelector = new GenomeSelector(someCatalog);

        //Act
        var genomes = genomeSelector.selectGenomes(courseRecord, courseSequence, someSemesters);

        //Assert
        expect(genomes['fall 2018']).to.include.members(["HasClassACorequisite", "BasicClassA"]);
    })

    it('should prioritize taking a class that is prerequisite to another', () => {
        //Arrange
        var courseRecord = [];
        var courseSequence = [ "BasicClassC", "HasClassBPrerequisite", "BasicClassB"];

        someSemesters[0].credits = 3;
        someSemesters[1].credits = 5;

        var genomeSelector = new GenomeSelector(someCatalog);

        //Act
        var genomes = genomeSelector.selectGenomes(courseRecord, courseSequence, someSemesters);

        //Assert
        expect(genomes['fall 2018']).to.include.members(['BasicClassB']);
    })

    //Should place courses if their prereqs/coreqs are in the course record
})