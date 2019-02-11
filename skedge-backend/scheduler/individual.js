/* 
*  an individual is a schedule for a single semester
*  individual constructor must copy parent's semester
*
*  Semester is an array with [Course: Section] format 
*  EXAMPLE:
*   [
*       COMP346: {{type: LEC, etc}, {type: TUT, etc}, {type: LAB, etc}},
*       SOEN341: {{type: LEC, etc}, {type: TUT, etc}},
*       SOEN331: {{type: LEC, etc}, {type: TUT, etc}}
*   ]
*
* @param {*} sectionList the object containing all the relevant sections for this genome
* @returns an individual with one allele different than the parent
*/

function individual(semester)
{
    this.fitness = 0;
    this.genome = []; //array of course name and codes
    this.semester = semester;

    for (const key in semester)
    {
        if (semester.hasOwnProperty(key))
        {
            this.genome.push(key);
        }
    }
}