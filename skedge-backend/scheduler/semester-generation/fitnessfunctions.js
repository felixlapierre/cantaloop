const restrictionOverlap = require('./restrictionOverlap.js');
const conflictOverlap = require('./conflictOverlap.js');

class TimeRestrictionFitness{
    
    constructor(restrictions){
        this.restrictions = restrictions;
    }

    EvaluateFitness(individual)
    {
        var restriction = this.restrictions
        var semester = individual.semester;
        var genome = individual.genome;
        var overlap = 0;
    
        for (let i = 0; i < genome.length; i++) {
            for (let j = 0; j < restriction.length; j++) {
                for (const key in semester[genome[i]]) {
                    overlap = overlap + restrictionOverlap(semester[genome[i]][key], restriction[j]);
                }
            }  
        }
        
        individual.fitness = individual.fitness - overlap;
    }
}

class CourseConflictFitness{

    EvaluateFitness(individual){
        var semester = individual.semester;
        var genome = individual.genome;
        var overlap = 5000
    
        for (let i = 0; i < genome.length; i++) {
            for (let j = (i + 1); j < genome.length; j++) {
    
                // semester[genome[i]] = { "LEC": stuff, "TUT": stuff, "LAB": stuff };
                for (const key in semester[genome[i]]) {
                    if (semester[genome[i]].hasOwnProperty(key)) {
    
                        for (const key2 in semester[genome[j]]) {
    
                            if (semester[genome[j]].hasOwnProperty(key2)) {
                                overlap = overlap - conflictOverlap( semester[genome[i]][key], semester[genome[j]][key2]);
                            }
                        }
                    }
                }
            }
        }
        if (overlap != 5000) individual.hasConflicts = true;

        individual.fitness = overlap;
    }
}

module.exports.CourseConflictFitness = CourseConflictFitness;
module.exports.TimeRestrictionFitness = TimeRestrictionFitness;