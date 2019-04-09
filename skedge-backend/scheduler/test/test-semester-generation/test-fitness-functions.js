var expect = require('chai').expect;
var CourseConflictFitness = require("../../semester-generation/fitnessfunctions.js").CourseConflictFitness;
var TimeRestrictionFitness = require("../../semester-generation/fitnessfunctions.js").TimeRestrictionFitness;
var individual = require("../../semester-generation/individual.js");

describe('CourseConflictFitness', ()=>{
    it('should return full score for a schedule without conflicts', ()=>{

        // Arrange
        var conflictFitness = new CourseConflictFitness();

        var someSemesterWithoutConflicts = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"We" },
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We" }
            }
        }
        var someIndividual = new individual(someSemesterWithoutConflicts);

        // Act

        conflictFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(5000);

    });

    it('should indicate that it has no conflicts for a schedule without conflicts', ()=>{

        // Arrange
        var conflictFitness = new CourseConflictFitness();

        var someSemesterWithoutConflicts = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"We" },
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We" }
            }
        }
        var someIndividual = new individual(someSemesterWithoutConflicts);

        // Act

        conflictFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.hasConflicts).to.be.false;

    });

    it('should return full score for a schedule without conflicts because of an online class', ()=>{

        // Arrange
        var conflictFitness = new CourseConflictFitness();

        var someSemesterWithoutConflicts = {
            "SomeCourse" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeOnlineCourse" : {
                "lecture" : { "time_start":"00:00","time_end":"00:00","days":"N\/A" }
            }
        }
        var someIndividual = new individual(someSemesterWithoutConflicts);

        // Act

        conflictFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(5000);

    });

    it('should return deprecated score for a schedule with one full conflict across one day', ()=>{

        // Arrange
        var conflictFitness = new CourseConflictFitness();

        var someSemesterWithOneFullConflict = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterWithOneFullConflict);

        // Act

        conflictFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(4925);

    });

    it('should indicate that it has conflicts for a schedule with one full conflict across one day', ()=>{

        // Arrange
        var conflictFitness = new CourseConflictFitness();

        var someSemesterWithOneFullConflict = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterWithOneFullConflict);

        // Act

        conflictFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.hasConflicts).to.be.true;

    });

    it('should return lower score for a schedule with one full conflict across two days', ()=>{

        // Arrange
        var conflictFitness = new CourseConflictFitness();

        var someSemesterWithOneFullConflict = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"TuTh" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"TuTh"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterWithOneFullConflict);

        // Act

        conflictFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(4850);

    });

});

describe('TimeRestrictionFitness', ()=>{

    it('should assign full score for a schedule that does not have a restriction', ()=>{
        
        // Arrange
        var restrictions = [];
        var restrictionFitness = new TimeRestrictionFitness(restrictions);

        var someSemesterThatDoesNotOverlapTheRestriction = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"We"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterThatDoesNotOverlapTheRestriction);

        someIndividual.fitness = 5000;
        // Act

        restrictionFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(5000);

    });

    it('should assign full score for a schedule that does not overlap with a restriction ', ()=>{
        
        // Arrange
        var restrictions = [{ "time_start":"02:00","time_end":"04:00","days":"Mo"}];
        var restrictionFitness = new TimeRestrictionFitness(restrictions);

        var someSemesterThatDoesNotOverlapTheRestriction = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"We"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterThatDoesNotOverlapTheRestriction);

        someIndividual.fitness = 5000;
        // Act

        restrictionFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(5000);

    });

    it('should assign full score for a schedule that does not overlap with a restriction happening on the same day', ()=>{
        
        // Arrange
        var restrictions = [{ "time_start":"02:00","time_end":"04:00","days":"Tu"}];
        var restrictionFitness = new TimeRestrictionFitness(restrictions);

        var someSemesterThatDoesNotOverlapTheRestriction = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"We"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterThatDoesNotOverlapTheRestriction);

        someIndividual.fitness = 5000;
        // Act

        restrictionFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(5000);

    });

    it('should assign lower score for a schedule that fully overlaps with a restriction ', ()=>{
        
        // Arrange
        var restrictions = [{ "time_start":"08:45","time_end":"09:00","days":"Tu"}];
        var restrictionFitness = new TimeRestrictionFitness(restrictions);

        var someSemesterThatFullyOverlapsTheRestriction = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"We"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterThatFullyOverlapsTheRestriction);

        someIndividual.fitness = 5000;
        // Act

        restrictionFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(4985);

    });

    it('should assign lower score for a schedule that partially overlaps with multiple restrictions ', ()=>{
        
        // Arrange
        var restrictions = [{ "time_start":"08:15","time_end":"09:15","days":"Tu"}, { "time_start":"08:15","time_end":"09:15","days":"We"}];
        var restrictionFitness = new TimeRestrictionFitness(restrictions);

        var someSemesterThatPartiallyOverlapsTheRestriction = {
            "SomeCourse1" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"Tu" },
                "tutorial" : { "time_start":"11:45","time_end":"13:00","days":"Tu" },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"Tu" }
            },
            "SomeCourse2" : {
                "lecture" : { "time_start":"08:45","time_end":"10:00","days":"We"},
                "tutorial" : { "time_start":"14:45","time_end":"16:00","days":"We"  },
                "lab" : { "time_start":"10:15","time_end":"11:30","days":"We"  }
            }
        }
        var someIndividual = new individual(someSemesterThatPartiallyOverlapsTheRestriction);

        someIndividual.fitness = 5000;
        // Act

        restrictionFitness.EvaluateFitness(someIndividual);

        // Assert

        expect(someIndividual.fitness).to.equal(4970);

    });
});