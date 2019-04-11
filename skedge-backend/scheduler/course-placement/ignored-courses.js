function CourseIgnored(courseId)
{
    return courseId.match(/(MATH|PHYS|BIOL|COEN|ENCS272)/);
}

module.exports = CourseIgnored;