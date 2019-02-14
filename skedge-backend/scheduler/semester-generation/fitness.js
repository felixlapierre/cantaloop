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
            for (const key in semester[genome[i]]) {
                if (semester[genome[i]].hasOwnProperty(key)) {

                    for (const key2 in semester[genome[j]]) {

                        if (semester[genome[j]].hasOwnProperty(key2)) {
                            fitness = fitness - overlaps( semester[genome[i]][key], semester[genome[j]][key2]);
                        }
                    }
                }
            }
        }
    }
    return fitness;
}

module.exports = evaluateFitness;
