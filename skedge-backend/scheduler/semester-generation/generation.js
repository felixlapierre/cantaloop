var survive = require("./survive.js");
var breed = require("./breed.js");
var mutate = require("./mutate.js");
var individual = require('./individual.js');

function generation(parentPopulation, fitnessFunctions, sectionList, populationLimit)
{
    this.population = [];
    var survivors = survive(parentPopulation);
    
    copySurvivorsToNewPopulation(survivors, this.population);
    performMutations(survivors, this.population, sectionList);
    performBreeding(survivors, ( populationLimit - this.population.length ), this.population);

    this.population.forEach(individual => {
        fitnessFunctions.forEach(fitnessFunction => {
            fitnessFunction.EvaluateFitness(individual);
        });
    });


    this.population.sort(function(a, b) {
            if (a.hasConflicts && b.hasConflicts) return 0;
            else if (a.hasConflicts) return 1;
            else if (b.hasConflicts) return -1;
            else return 0;
        });
    this.population.sort(function(a, b) { return a.fitness - b.fitness });
    
    return this.population;
}

function copySurvivorsToNewPopulation(survivors, population)
{
    survivors.reverse();
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
        var child = breed(survivors[Math.floor(survivors.length* Math.random())], survivors[Math.floor(survivors.length* Math.random())]);
        population.push(child);
    }
}

function initalGeneration(genome, sectionList, fitnessFunctions, populationLimit)
{
    var generation = [];
    var semester = {};

    for (let i = 0; i < populationLimit; i++) {
        genome.every(function(val)
        {
            semester[val] = sectionList[val][Math.floor(sectionList[val].length* Math.random())];
            return true;
        });
        generation.push( new individual(semester));
    }

    this.population.forEach(individual => {
        fitnessFunctions.forEach(fitnessFunction => {
            fitnessFunction.EvaluateFitness(individual);
        });
    });

    return generation;
    
}

module.exports.generation = generation;
module.exports.initalGeneration = initalGeneration;