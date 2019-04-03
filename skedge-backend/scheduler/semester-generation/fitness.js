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

function evaluateFitness(semester, restriction)
{
    var fitness = 1440 
    

    return fitness;
}





/**
 * assigns a rank to all individuals of a generation
 * uses evaluateFitness
 * 
 * @param {*} generation 
 */
function rankGeneration(generation, fitnessFunction){

    for (const key in generation) {
        if (generation.hasOwnProperty(key)) {
            generation[key].fitness = fitnessFunction.evaluateFitness(generation[key].semester);
        }
    }
}


module.exports.evaluateFitness = evaluateFitness;
module.exports.rankGeneration = rankGeneration;
