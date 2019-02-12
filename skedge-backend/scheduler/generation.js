var survive = require("./survive.js");
var breed = require("./breed.js");
var mutate = require("./mutate.js");
const POPULATIONLIMIT = 20;
function generation(parentPopulation, evaluateFitness, sectionList)
{
    this.population = [];
    
    var survivors = survive(parentPopulation);

    copySurvivorsToNewPopulation(survivors, this.population);
    performMutations(survivors, this.population, sectionList);
    performBreeding(survivors, (POPULATIONLIMIT-population.length), this.population);

    evaluateFitness(this.population);
    this.population.sort(function(a, b){return a.fitness - b.fitness});
    
    return this.population;
}

function copySurvivorsToNewPopulation(survivors, population)
{
    survivors.every(function(val){
        if (population.length <= 5)
        {
            population.push(val);
        }
        return true;
    });
}

function performMutations(survivors, population, sectionList)
{
    for (let i = 0; i < 5; i++) 
    {
        var parent = survivors[Math.floor(survivors.length* Math.random())];
        var mutant =  mutate(parent, sectionList);
        population.push(mutant);
    }
}

function performBreeding(survivors, populationSize, population)
{
    for (let i = 0; i < populationSize; i++)
    {
        var child = breed(survivors[Math.floor(survivors.length* Math.random())],survivors[Math.floor(survivors.length* Math.random())]);
        population.push(child);
    }
}

module.exports = generation;