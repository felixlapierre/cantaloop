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