import databaseConstants from 'databaseConstants';

let subject;
let catalog;
let courseName;
let courseCatalog;

for (let i = 0; i <databaseConstants.classes.length; i++) {
    subject = databaseConstants.classes[i].substring(0, 4);
    catalog = databaseConstants.classes[i].substring(5);
    console.log(subject);
    console.log(catalog);

    courseCatalog = JSON.parse(callCourseCatalogAPI(subject, catalog))[0];
    if(courseCatalog != undefined) {
        courseName = courseCatalog.title;
        console.log(
            createCatalogJSONObject(subject+catalog,
            courseCatalog.classUnit,
            getPrerequisite(courseCatalog.prerequisites),
            getCorequisite(courseCatalog.prerequisites),
            [/*TODO: Add method that return array of section for FALL semester*/],
            [/*TODO: Add method that return array of section for WINTER semester*/],
            [/*TODO: Add method that return array of section for SUMMER semester*/]));
        databaseConstants.database_service.insertOneInDatabase(courseCatalog, 'courseCatalog');
    }
}

function callCourseCatalogAPI(subject, catalog) {
    databaseConstants.request.open("GET",  "https://opendata.concordia.ca/API/v1/course/catalog/filter/"
        + subject + "/" + catalog + "/*", false, databaseConstants.userName, databaseConstants.passWord);
    databaseConstants.request.send();
    console.log(databaseConstants.request.status);
    return databaseConstants.request.responseText;
}

function createCatalogJSONObject(courseId, courseCredits, coursePrerequisites, courseCorequisites, fallSections, winterSections, summerSections) {
    return JSON.parse("{\"" +
        courseId + "\": { " +
        "\"prerequisites\":" + JSON.stringify(coursePrerequisites) + "," +
        "\"corequisites\":" + JSON.stringify(courseCorequisites) + "," +
        "\"credits\":" + parseInt(courseCredits) + "," +
        "\"fall\":" + JSON.stringify(fallSections) + "," +
        "\"winter\":" + JSON.stringify(winterSections) + "," +
        "\"summer\":" + JSON.stringify(summerSections) + "}" +
        "}");
}

function getPrerequisite (courseCatalog) {
    courseCatalog = courseCatalog.split(" ");
    var prereq = false;
    var prereqObject = [];
    for (var element = 0; element<courseCatalog.length; element++){
        if(courseCatalog[element].includes("Prerequisite") || courseCatalog[element].includes("PREREQ")){
            prereq = true;
        }
        else if (courseCatalog[element].includes("Corequisite") || courseCatalog[element].includes("Co-requisite")) {
            prereq = false;
        }
        else if (courseCatalog[element].includes("Never")) {
            prereq = false;
        }
        else if (prereq==true && (courseCatalog[element].includes("SOEN") || courseCatalog[element].includes("COMP") || courseCatalog[element].includes("ENGR") || courseCatalog[element].includes("MATH") || courseCatalog[element].includes("COEN") || courseCatalog[element].includes("ENCS"))){
            if (courseCatalog[element].search(/\d/) == -1){
                courseCatalog[element] = courseCatalog[element]+courseCatalog[element+1];
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

function getCorequisite (courseCatalog) {
    courseCatalog = courseCatalog.split(" ");
    var coreq =false;
    var coreqObject = [];
    for (var element = 0; element<courseCatalog.length; element++){
        if(courseCatalog[element].includes("Prerequisite") || courseCatalog[element].includes("PREREQ")){
            coreq=false;
        }
        else if (courseCatalog[element].includes("Corequisite") || courseCatalog[element].includes("Co-requisite")) {
            coreq=true;
        }
        else if (courseCatalog[element].includes("Never")) {
            coreq=false;
        }
        else if (coreq==true && (courseCatalog[element].includes("SOEN") || courseCatalog[element].includes("COMP") || courseCatalog[element].includes("ENGR") || courseCatalog[element].includes("MATH") ||courseCatalog[element].includes("COEN") || courseCatalog[element].includes("ENCS"))){
            if (courseCatalog[element].search(/\d/) == -1){
                courseCatalog[element] = courseCatalog[element]+courseCatalog[element+1];
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