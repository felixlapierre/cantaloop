/**
 * Determines which individuals will survive into the next generation 
 * Takes 1/4 of the top scoring individuals of the previous generation and adds them to the new generation
 *  
 * @param oldGeneration a set of individuals from a previous generation
 * @returns an array of individuals that have a high rank
 */


function survive( oldGeneration )
{
    var newGeneration = [];

    oldGeneration.sort(function(a, b){return b.fitness - a.fitness});
    
    for (let i = 0; i < (oldGeneration.length*1/4); i++) {

        newGeneration.push( oldGeneration[i] );

    }     
    
    return newGeneration;
}

module.exports= survive;