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

let course;
let courseName;
let courseCatalog;
let courseDescription;
let concordiaCourseID;
let subject;
let catalog;

for (let i = 0; i <classes.length; i++) {
    subject = classes[i].substring(0, 4);
    catalog = classes[i].substring(5);
    console.log(subject);
    console.log(catalog);

    courseCatalog = JSON.parse(callCourseCatalogAPI(subject, catalog))[0];

    if(courseCatalog != undefined) {
        courseName = courseCatalog.title;
        concordiaCourseID = courseCatalog.ID;
        course = JSON.parse(callCourseDescriptionAPI(concordiaCourseID));
        courseDescription = course[0].description.replace(/(\r\n|\n|\r)/gm, "").replace("?", "");
        console.log(createJSONObject(subject+catalog, courseName, courseDescription));
        //database_service.insertOneInDatabase(createJSONObject(subject+catalog, courseName, courseDescription), 'descriptions');
    }
}

function callCourseCatalogAPI(subject, catalog) {
    request.open("GET",  "https://opendata.concordia.ca/API/v1/course/catalog/filter/" + subject + "/" + catalog + "/*", false, userName, passWord);
    request.send();
    console.log(request.status);
    return request.responseText;
}

function callCourseDescriptionAPI(ID) {
    request.open("GET",  "https://opendata.concordia.ca/API/v1/course/description/filter/" + ID, false, userName, passWord);
    request.send();
    console.log(request.status);
    return request.responseText;
}

function createJSONObject(courseID, name, description) {
    return JSON.parse("{\"" +
                courseID + "\": { \"name\":\"" + name + "\"," +
                                "\"description\":\"" + description +
                                "\"}" +
            "}");
}
