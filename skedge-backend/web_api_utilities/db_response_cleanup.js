module.exports =
{

    cleanGetCoursesDescription : function(dbOutput)
    {
        let cleanCoursesObj = {};
        for (const dbCourseObj of dbOutput) 
        {
            let reformattedDBObject = JSON.parse(JSON.stringify(dbCourseObj));
            Object.keys(reformattedDBObject).forEach( key => {
                if(key != "_id"){
                    cleanCoursesObj[key] = reformattedDBObject[key];
                }
            });
        }
        return cleanCoursesObj;
    }

};