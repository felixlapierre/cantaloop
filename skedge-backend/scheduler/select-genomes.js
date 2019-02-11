var rankCourses = require('rank-courses');

/**
 * Selects the genome for each semester. Assumes start of Fall 2017
 * @param {*} courseRecord An array of strings representing the courses already taken
 * @param {*} courseSequence An array of strings representing the courses to be taken
 * @param {*} courseMap An object containing all the course codes and their sections, prerequisites, corequisites.
 */
function selectGenomes(courseRecord, courseSequence, semesters, courseMap)
{
    var genomeHistory = {};
    var ranks = rankCourses(courseSequence, courseMap);
    
}

module.exports = selectGenomes;