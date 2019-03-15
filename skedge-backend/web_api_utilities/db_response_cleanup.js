module.exports =
{

    cleanGetCoursesDescription : function(dbOutput)
    {
        let cleanCoursesObj = {};
        for (const dbCourseObj of dbOutput) 
        {
            let unfuckedDBObject = JSON.parse(JSON.stringify(dbCourseObj));
            Object.keys(unfuckedDBObject).forEach( key => {
                if(key != "_id"){
                    cleanCoursesObj[key] = unfuckedDBObject[key];
                }
            });
        }
        return cleanCoursesObj;
    }

};