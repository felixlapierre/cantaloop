const restrictionOverlap = require('./restrictionOverlap.js');
const conflictOverlap = require('./conflictOverlap.js');

const classTypes = ["lecture", "lab", "tutorial"];

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
                classTypes.forEach(classType => {
                    if(semester[genome[i]].hasOwnProperty(classType))
                        overlap = overlap + restrictionOverlap(semester[genome[i]][classType], restriction[j]);
                });
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
                classTypes.forEach(classType1 => {
                    if (semester[genome[i]].hasOwnProperty(classType1)) {
                        classTypes.forEach(classType2 => {
                            if (semester[genome[j]].hasOwnProperty(classType2)) {
                                overlap = overlap - conflictOverlap( semester[genome[i]][classType1], semester[genome[j]][classType2]);
                            }
                        })
                    }
                })
            }
        }
        if (overlap != 5000) individual.hasConflicts = true;

        individual.fitness = overlap;
    }
}

module.exports.CourseConflictFitness = CourseConflictFitness;
module.exports.TimeRestrictionFitness = TimeRestrictionFitness;