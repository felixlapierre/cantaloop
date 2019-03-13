/**
 * creates a offspring with a mutation that differentiates it from its parent 
 *  
 * @param individual parent the base for the individual to be created
 * @param {*} sectionList the object containing all the relevant sections for this genome
 * @returns an individual with one allele different than the parent
 */

const individual = require('./individual.js');

function mutate(parent, sectionList)
{
    var offspring = new individual(JSON.parse(JSON.stringify(parent.semester)));
    var mutantCourse = parent.genome[Math.floor(parent.genome.length* Math.random())];
    var alleles = sectionList[mutantCourse];

    do
    {
        var newAllele = alleles[Math.floor(alleles.length* Math.random())];
    } while (newAllele === parent.semester[mutantCourse]
        //Avoid infinite loop if there is only one possible allele
        && alleles.length !== 1);

    offspring.semester[mutantCourse] = newAllele;

    return offspring;
}

module.exports = mutate;