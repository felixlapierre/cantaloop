function CourseIgnored(courseId)
{
    return courseId.match(/(MATH|PHYS|BIOL|COEN|ENCS272|COMP228)/);
}

module.exports = CourseIgnored;