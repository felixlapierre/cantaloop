const individual = require('individual.js');
/*
    returns mutant offspring from parent individual
*/
function mutate(parent, sectionList)
{
    var offpring = individual(parent.semester);
    var mutantCourse = parent.genome[Math.floor(parent.genome.length* Math.random())]; 
    var alleles = sectionList[mutantCourse]; 

    var newAllele = alleles[Math.floor(alleles.length* Math.random())];

    offspring.semester[mutantCourse] = newAllele;
    return offpring;
}

module.exports = mutate;