/**
 * Determines which individuals will survive into the next generation 
 *  
 * @param oldGeneration a set of individuals from a previous generation
 * @returns an array of individuals that have a high rank
 */

const cullRate = 5; // TODO: change

function survival( oldGeneration )
{
    var newGeneration = [];
    for ( var key in oldGeneration)
    {
        if ( oldGeneration.hasOwnProperty(key))
        {
             if ( oldGeneration[key].rank > cullRate )
             {
                newGeneration.push( oldGeneration[key] );
             }
        }
    }
    return newGeneration;
}

module.exports= survival;