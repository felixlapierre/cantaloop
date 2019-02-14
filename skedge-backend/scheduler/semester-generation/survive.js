/**
 * Determines which individuals will survive into the next generation 
 *  
 * @param oldGeneration a set of individuals from a previous generation
 * @returns an array of individuals that have a high rank
 */

const cullRate = 6; // TODO: change

function survive( oldGeneration )
{
    var newGeneration = [];

    for ( var key in oldGeneration)
    {
        if ( oldGeneration.hasOwnProperty(key))
        {
             if ( oldGeneration[key].fitness >= cullRate )
             {
                newGeneration.push( oldGeneration[key] );
             }
        }
    }
    newGeneration.sort(function(a, b){return a.fitness - b.fitness});
    return newGeneration;
}

module.exports= survive;