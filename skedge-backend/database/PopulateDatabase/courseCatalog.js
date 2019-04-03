var databaseConstants = require('../PopulateDatabase/databaseConstants');
const courseSchem = require('../schemas/courseSchema')
const courseCatalogSchema = require('../schemas/courseCatalogSchema');
const Section = courseCatalogSchema.section;
const Class = courseCatalogSchema.class;

let courseSubject;
let courseCode;
let courseName;
let courseInfo;

async function main() {
    //Clear the collection
    await databaseConstants.database_service.clearCourseCatalog();
    
    for (let i = 0; i < databaseConstants.classes.length; i++) {
        courseSubject = databaseConstants.classes[i].substring(0, 4);
        courseCode = databaseConstants.classes[i].substring(5);

        var catalogEntry;

        courseInfo = JSON.parse(callCourseCatalogAPI(courseSubject, courseCode))[0];

        if (courseInfo != undefined) {
            courseName = courseInfo.title;

            let sectionFall = await getSections(courseSubject, courseCode, 'fall');
            let sectionWinter = await getSections(courseSubject, courseCode, 'winter');
            let sectionSummer = await getSections(courseSubject, courseCode, 'summer');

            catalogEntry = createCatalogJSONObject(courseSubject + courseCode,
                courseInfo.classUnit,
                getPrerequisite(courseInfo.prerequisites),
                getCorequisite(courseInfo.prerequisites),
                sectionFall,
                sectionWinter,
                sectionSummer);

            catalogEntry.save((err, entry) => {
                if(err) {console.log(err + err.stack)}
                else {console.log("Added " + catalogEntry.courseId + " to database.")}
            });
        }
    }
}

function callCourseCatalogAPI(subject, catalog) {
    databaseConstants.request.open("GET", "https://opendata.concordia.ca/API/v1/course/catalog/filter/"
        + subject + "/" + catalog + "/*", false, databaseConstants.userName, databaseConstants.passWord);
    databaseConstants.request.send();
    return databaseConstants.request.responseText;
}

function createCatalogJSONObject(courseId, courseCredits, coursePrerequisites, courseCorequisites, fallSections, winterSections, summerSections) {
    
    return new courseCatalogSchema.courseCatalog ({
        "courseId": courseId,
        "prerequisites": coursePrerequisites,
        "corequisites": courseCorequisites,
        "credits": courseCredits,
        "fall": fallSections,
        "winter": winterSections,
        "summer": summerSections
    });
}

function getPrerequisite(courseCatalog) {
    courseCatalog = courseCatalog.split(" ");
    var prereq = false;
    var prereqObject = [];
    for (var element = 0; element < courseCatalog.length; element++) {
        if (courseCatalog[element].includes("Prerequisite") || courseCatalog[element].includes("PREREQ")) {
            prereq = true;
        }
        else if (courseCatalog[element].includes("Corequisite") || courseCatalog[element].includes("Co-requisite")) {
            prereq = false;
        }
        else if (courseCatalog[element].includes("Never")) {
            prereq = false;
        }
        else if (prereq == true && (courseCatalog[element].includes("SOEN") || courseCatalog[element].includes("COMP") || courseCatalog[element].includes("ENGR") || courseCatalog[element].includes("MATH") || courseCatalog[element].includes("COEN") || courseCatalog[element].includes("ENCS"))) {
            if (courseCatalog[element].search(/\d/) == -1) {
                courseCatalog[element] = courseCatalog[element] + courseCatalog[element + 1];
            }
            courseCatalog[element] = courseCatalog[element].replace(';', '')
            courseCatalog[element] = courseCatalog[element].replace(',', '')
            courseCatalog[element] = courseCatalog[element].replace('.', '')
            courseCatalog[element] = courseCatalog[element].replace('or', '')
            prereqObject.push(courseCatalog[element]);
        }
    }
    return prereqObject;
}

function getCorequisite(courseCatalog) {
    courseCatalog = courseCatalog.split(" ");
    var coreq = false;
    var coreqObject = [];
    for (var element = 0; element < courseCatalog.length; element++) {
        if (courseCatalog[element].includes("Prerequisite") || courseCatalog[element].includes("PREREQ")) {
            coreq = false;
        }
        else if (courseCatalog[element].includes("Corequisite") || courseCatalog[element].includes("Co-requisite")) {
            coreq = true;
        }
        else if (courseCatalog[element].includes("Never")) {
            coreq = false;
        }
        else if (coreq == true && (courseCatalog[element].includes("SOEN") || courseCatalog[element].includes("COMP") || courseCatalog[element].includes("ENGR") || courseCatalog[element].includes("MATH") || courseCatalog[element].includes("COEN") || courseCatalog[element].includes("ENCS"))) {
            if (courseCatalog[element].search(/\d/) == -1) {
                courseCatalog[element] = courseCatalog[element] + courseCatalog[element + 1];
            }
            courseCatalog[element] = courseCatalog[element].replace(';', '')
            courseCatalog[element] = courseCatalog[element].replace(',', '')
            courseCatalog[element] = courseCatalog[element].replace('.', '')
            courseCatalog[element] = courseCatalog[element].replace('or', '')
            coreqObject.push(courseCatalog[element]);
        }
    }
    return coreqObject;
}

/*TODO: Add sections generator implementation here*/

const emptyClass = new Class({
    time_start: "00:00",
    time_end: "00:00",
    days: ""
})

function makeTrios(lectures, labs, tutorials) {
    arrayTrios = [];

    lectures.forEach(lecture => {
        if(labs.length == 0)
        {
            if(tutorials.length == 0)
            {
                //No lectures or tutorials
                arrayTrios.push(new Section({"lecture": lecture, "lab": emptyClass, "tutorial": emptyClass}));
            }
            else
            {
                //No labs, but there are tutorials
                tutorials.forEach(tutorial => {
                    arrayTrios.push(new Section({"lecture": lecture, "lab": emptyClass, "tutorial": tutorial}));
                })
            }
        }
        else
        {
            if(tutorials.length == 0)
            {
                //No tutorials, but there are labs
                labs.forEach(lab => {
                    arrayTrios.push(new Section({"lecture": lecture, "lab": lab, "tutorial": emptyClass}));
                })
            }
            else
            {
                //There are labs and tutorials
                labs.forEach(lab => {
                    tutorials.forEach(tutorial => {
                        arrayTrios.push(new Section({"lecture": lecture, "lab": lab, "tutorial": tutorial}));
                    })
                })
            }
        }
    })
    return arrayTrios;
}

function filterForSections(myArray, semester) {
    let semRegex;
    let afterFilter = [];

    if (semester.startsWith('fall')) {
        semRegex = 2;
    }
    if (semester.startsWith('winter')) {
        semRegex = 4;
    }
    if (semester.startsWith('summer')) {
        semRegex = 0;
    }

    myArray.forEach(element => {

        if (element.termCode.endsWith(semRegex.toString())) {
            let day = "";

            startTime = (element.classStartTime.substring(0, 5).replace('.', ':'));
            endTime = (element.classEndTime.substring(0, 5).replace('.', ':'));

            if (element.modays == "Y") {
                day += "Mo";
            }
            if (element.tuesdays == 'Y') {
                day += "Tu";
            }
            if (element.wednesdays == 'Y') {
                day += "We";
            }
            if (element.thursdays == 'Y') {
                day += "Th";
            }
            if (element.fridays == 'Y') {
                day += "Fr";
            }

            afterFilter.push(new Class({
                "time_start": startTime,
                "time_end": endTime,
                "days": day
            }));
        }
    });
    return (afterFilter);//We see it in the terminal but idk why it is not a proper JSON object?
}

function findClass(subject, catalog, semester, schema)
{
    return new Promise((resolve, reject) => {
        const courseProjectionString = 'section termCode classStartTime classEndTime modays tuesdays wednesdays thursdays fridays';
        schema.find({ 'subject': subject, 'catalog': catalog }, courseProjectionString, (err, result) =>
        {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(filterForSections(result, semester));
            }
        });
    });
}

async function findTutorial(subject, catalog, semester) {
    return findClass(subject, catalog, semester, courseSchem.tutSch);
}

function findLab(subject, catalog, semester) {
    return findClass(subject, catalog, semester, courseSchem.labSch);
}

function findLec(subject, catalog, semester) {
    return findClass(subject, catalog, semester, courseSchem.lecSch);
}

async function getSections(subject, courseCode, semester) {
    try
    {
        var lectures = await findLec(subject, courseCode, semester);
        var tutorials = await findTutorial(subject, courseCode, semester);
        var labs = await findLab(subject, courseCode, semester);
        return trios = await makeTrios(lectures, labs, tutorials);
    }
    catch(ex)
    {
        console.log(ex.message + "\n" + ex.stack);
    }

}

//Invoke the script then exit the process
main()
.then(() => {
    process.exit(0);
})
.catch((err) => {
    console.log("Failed to populate database: " + err.message());
    process.exit(1);
})