// import databaseConstants from 'databaseConstants.js';
const courseSchem = require('../schemas/courseSchema')
let subject;
let catalog;
let courseName;
let courseCatalog;

// for (let i = 0; i <databaseConstants.classes.length; i++) {
//     subject = databaseConstants.classes[i].substring(0, 4);
//     catalog = databaseConstants.classes[i].substring(5);
//     console.log(subject);
//     console.log(catalog);

//     courseCatalog = JSON.parse(callCourseCatalogAPI(subject, catalog))[0];
//     if(courseCatalog != undefined) {
//         courseName = courseCatalog.title;
//         console.log(
//             createCatalogJSONObject(subject+catalog,
//             courseCatalog.classUnit,
//             getPrerequisite(courseCatalog.prerequisites),
//             getCorequisite(courseCatalog.prerequisites),
//             [/*TODO: Add method that return array of section for FALL semester*/],
//             [/*TODO: Add method that return array of section for WINTER semester*/],
//             [/*TODO: Add method that return array of section for SUMMER semester*/]));
//         databaseConstants.database_service.insertOneInDatabase(courseCatalog, 'courseCatalog');
//     }
// }

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

function  makeTrios(lec,lab,tut){
  var trio=null;
  lec.forEach(lecElement => {
    console.log(lecElement);
    
    // lab.forEach(labElement =>{
    //   tut.forEach(tutElement => {
    //     let p1 = new Promise((resolve,reject)=>{
    //       trio = new sectionObj(lecElement, labElement, tutElement);
    //     })
    //     .then(console.log(trio));
    //     resolve("Success");

  

        
    //   });

    // } )


    
  });


  
}

function classObj (start, end, day) {
  this.startTime = start;
  this.endTime = end;
  this.day = day;

}

function sectionObj (lec, lab, tut) {
  this.lecture = lec;
  this.lab = lab;
  this.tutorial = tut;

} 
function filterForSections(myArray) {
  let afterFilter = [];



  myArray.forEach(element => {
    let day = "";

    startTime = element.classStartTime.substring(0, 5).replace('.', ':');
    endTime = element.classEndTime.substring(0, 5).replace('.', ':');

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

    var cObj = new classObj(startTime, endTime, day);
    afterFilter.push(cObj);


  });


  return afterFilter;
  // var jsonFile = JSON.stringify(result);

  // return jsonFile;//<= I get a 404 error =/,
  // even when I have already convert it into a JSON object to send it to the server

  // console.log(result);//<= when I put the console.log(result), it shows the correct array but I can't return it correctly??


}

module.exports={
  // makeTrios( )

 makeArrayCourses: function(subject, catalog) {

    var tutorialArray;
    var lecArray;
    var labArray;

    var secObj = new sectionObj('', '', '');

    var x;

    let p1 = new Promise((resolve, reject) => {
      courseSchem.tutSch.find({ 'subject': subject, 'catalog': catalog }
        , 'section classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
        , function (err, result) {
          if (err) {
            console.log("Error!")
          } else {
            x = filterForSections(result);

            secObj.tutorial = x;
            resolve("");
          }
        });
    });

    p1.then((successMessage) => {
      console.log("");

    });

    let p2 = new Promise((resolve, reject) => {
      courseSchem.lecSch.find({ 'subject': subject, 'catalog': catalog }
        , 'section classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
        , function (err, result) {
          if (err) {
            console.log("Error!")
          } else {
            //return the object
            x = filterForSections(result);
            secObj.lecture = x;
            resolve("Success2");

          }
        });
    });
    p2.then((successMessage) => {
    });


    let p3 = new Promise((resolve, reject) => {
      courseSchem.labSch.find({ 'subject': subject, 'catalog': catalog }
        , 'section classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
        , function (err, result) {
          if (err) {
            console.log("Error!")
          } else {
            x = filterForSections(result);
            secObj.lab = x;
            resolve("Success3");
          }
        });
    })
    p3.then((successMessage) => {
      console.log("reussi");
      console.log(secObj);
      // makeTrios(lecArray,labArray,tutorialArray);
      return secObj;
    });
  }
  //end of function


   


 
}