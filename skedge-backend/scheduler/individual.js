/**
*  an individual is a schedule for a single semester
*  individual constructor must take a parent's semester and return a child
*
*  Semester is an array with [Course: Section] format 
*  EXAMPLE:
*   {
*       COMP346: [{"type": "LEC", etc}, {"type": "TUT", etc}, {"type": LAB, etc}],
*       SOEN341: [{"type": "LEC", etc}, {"type": "TUT", etc}],
*       SOEN331: [{"type": "LEC", etc}, {"type": "TUT", etc}]
*   };
*
* @param {*} parentSemester object with the courses and alleles that the individual will be made with
* @returns an individual with one allele different than the parent
*/

function individual(parentSemester)
{
    this.fitness = 0;
    this.genome = []; //array of course name and codes
    this.semester = JSON.parse(JSON.stringify(parentSemester));

    for (const key in parentSemester)
    {
        if (parentSemester.hasOwnProperty(key))
        {
            this.genome.push(key);
        }
    }
    return this;
}
module.exports = individual;
