const overlaps = require('./overlaps.js');

class TimeRestrictionFitness{
    constructor(restrictions){
        this.restrictions = restrictions;
    }

    EvaluateFitness(individual, restriction)
    {
        var semester = individual.semester;
        var genome = individual.genome;
        var restrictionOverlap = 0;
    
        for (let i = 0; i < genome.length; i++) {
            for (let j = 0; j < restriction.length; j++) {
                for (const key in semester[genome[i]]) {
                    restrictionOverlap = restrictionOverlap + overlaps(semester[genome[i]][key], restriction[i]);
                }
            }  
        }
        
        individual.fitness = restrictionOverlap;
    }
}

class CourseConflictFitness{

    EvaluateFitness(individual){
        var semester = individual.semester;
        var genome = individual.genome;
        var courseOverlap = 5000
    
        for (let i = 0; i < genome.length; i++) {
            for (let j = (i + 1); j < genome.length; j++) {
    
                // semester[genome[i]] = { "LEC": stuff, "TUT": stuff, "LAB": stuff };
                for (const key in semester[genome[i]]) {
                    if (semester[genome[i]].hasOwnProperty(key)) {
    
                        for (const key2 in semester[genome[j]]) {
    
                            if (semester[genome[j]].hasOwnProperty(key2)) {
                                courseOverlap = courseOverlap - overlaps( semester[genome[i]][key], semester[genome[j]][key2]);
                            }
                        }
                    }
                }
            }
        }
        if (courseOverlap != 5000) individual.hasConflicts = true;

        individual.fitness = courseOverlap;
    }
}

module.exports.CourseConflictFitness = CourseConflictFitness;
module.exports.TimeRestrictionFitness = TimeRestrictionFitness;