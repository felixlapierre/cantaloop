/**
 * creates a offspring with alleles taken randomly from its two parents 
 *  
 * @param individual parent1 the base for the individual to be created
 * @param individual parent2 the base for the individual to be created
 * @returns an individual with a random mix of alleles of its parents
 */

const individual = require('./individual.js');

function breed(parent1, parent2)
{
    var offspring = new individual(JSON.parse(JSON.stringify(parent1.semester)));

    for (const key in offspring.semester)
    {
        if (offspring.semester.hasOwnProperty(key)) 
        {
            if (Math.floor(2* Math.random())==1){
                offspring.semester[key] = parent2.semester[key];
            }
        }
    }
    return offspring;
}

module.exports = breed;