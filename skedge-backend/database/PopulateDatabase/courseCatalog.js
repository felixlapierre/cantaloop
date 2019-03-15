const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const userName = "144";
const passWord = "d4a992f7c25f4fb53ec1de9f0222a83d";
const request = new XMLHttpRequest();

const database_service = require('../database-service');

const classes = ["SOEN 422", "SOEN 423", "SOEN 448", "SOEN 491", "SOEN 387", "SOEN 487", "SOEN 228", "SOEN 287",
    "SOEN 321", "SOEN 331", "SOEN 341", "SOEN 342", "SOEN 343", "SOEN 344", "SOEN 345", "SOEN 357", "SOEN 384",
    "SOEN 385", "SOEN 390", "SOEN 490", "COMP 232", "COMP 248", "COMP 249", "COMP 335", "COMP 346", "COMP 348",
    "COMP 345", "COMP 353", "COMP 371", "COMP 426", "COMP 428", "COMP 442", "COMP 445", "COMP 451", "COMP 465",
    "COMP 472", "COMP 473", "COMP 474", "COMP 478", "COMP 479", "COMP 376", "COMP 476", "COMP 477", "COMP 444",
    "COMP 352", "BIOL 206", "BIOL 261", "CHEM 217", "CHEM 221", "CIVI 231", "ELEC 321", "ELEC 275", "ENGR 242",
    "ENGR 243", "ENGR 251", "ENGR 361", "ENGR 201", "ENGR 202", "ENGR 213", "ENGR 411", "ENGR 371", "ENGR 391",
    "ENGR 301", "MECH 221", "PHYS 252", "PHYS 284", "PHYS 385", "AERO 480", "AERO 482"];

let subject;
let catalog;
let courseName;
let courseCatalog;

for (let i = 0; i <classes.length; i++) {
    subject = classes[i].substring(0, 4);
    catalog = classes[i].substring(5);
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
        database_service.insertOneInDatabase(courseCatalog, 'courseCatalog');
    }
}

function callCourseCatalogAPI(subject, catalog) {
    request.open("GET",  "https://opendata.concordia.ca/API/v1/course/catalog/filter/" + subject + "/" + catalog + "/*", false, userName, passWord);
    request.send();
    console.log(request.status);
    return request.responseText;
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