/**
 * Checks for time conflicts between the elements of a semester
 * Determines a value for the fitness of an individual
 *  
 * @param individual semester the individual being ranked
 * @returns the rank of semester
 */
/*
    semester = 
        {
            "COMP346" : SECTIONA,
            "SOEN341" : SECTIONA,
            "SOEN331" : SECTIONA
        };

    section = 
        {
            "LEC" : CLASS,
            "TUT" : CLASS,
            "LAB" : CLASS
        };

    class = 
        {
            "time_start" : "17:45",
            "time_end" : "20:15",
            "days" : "We",
            etc.

        };

*/
const overlaps = require('./overlaps.js');

function evaluateFitness(semester)
{
    var genome = Object.keys(semester);
    var fitness = 1440;

    for (let i = 0; i < genome.length; i++) {
        for (let j = (i + 1); j < genome.length; j++) {

            // semester[genome[i]] = { "LEC": stuff, "TUT": stuff, "LAB": stuff };
            const classType = ["lecture", "lab", "tutorial"];
            classType.forEach(type1 => {
                if(semester[genome[i]].hasOwnProperty(type1))
                {
                    classType.forEach(type2 => {
                        if(semester[genome[j]].hasOwnProperty(type2))
                        {
                            fitness = fitness - overlaps( semester[genome[i]][type1], semester[genome[j]][type2]);
                        }
                    })
                }
            });
        }
    }
    return fitness;
}

/**
 * assigns a rank to all individuals of a generation
 * uses evaluateFitness
 * 
 * @param {*} generation 
 */
function rankGeneration(generation){
    for (const key in generation) {
        if (generation.hasOwnProperty(key)) {
            generation[key].fitness = evaluateFitness(generation[key].semester);
        }
    }
}


module.exports.evaluateFitness = evaluateFitness;
module.exports.rankGeneration = rankGeneration;
