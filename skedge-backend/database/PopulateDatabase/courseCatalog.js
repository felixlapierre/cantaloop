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
//             getSections(course, catalog,'fall'),
//             getSections(course,catalog,'winter'),
//             getSections(course,catalog,'summer')));
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
  let trio=null;
  arrayTrios = [];
  for (i=0;i<lec.length;i++){

    if(lab.length==0&&tut.length ==0){
      trio = new sectionObj(lec[i],"","");
      arrayTrios.push(trio);
    }
    
    if(lab.length==0&&tut.length>0){

      for(x=0;x<tut.length;x++){

        trio = new sectionObj(lec[i],"",tut[x]);
        arrayTrios.push(trio);

      }

    }

    if(tut.length==0&&lab.length>0){
      for(y=0;y<lab.length;y++){
        trio = new sectionObj(lec[i],lab[y],null);
        arrayTrios.push(trio);
      }
    }

    if(lab.length>0&&tut.length>0){
    for(y =0; y<lab.length; y++){

      for(x = 0 ; x<tut.length; x++){

        trio = new sectionObj(lec[i],lab[y],tut[x]);
        arrayTrios.push(trio);

      }
    }
  }

  }

  return arrayTrios;

}


function classObj (start, end, day) {
  this.startTime = start;
  this.endTime = end;
  this.day = day;
  return this;

//  return JSON.parse(" { \"startTime\":\"" + start + "\"," +
//                                 "\", endTime\":\"" + end + 
//                                 "\", day\":\"" + day +  "\" }")

}

function sectionObj (lec, lab, tut) {
  this.lecture = lec;
  this.lab = lab;
  this.tutorial = tut;
  return this;

  // return JSON.parse("{ \"lecture\":\"" + lec + "\"," +
  //                               "\"lab\":\"" + lab + "\"tutorial\":\"" + tut +
  //                               "\"}")
} 
function filterForSections(myArray,semester) {
  let semRegex;
  let afterFilter = [];

  if(semester.startsWith('fall')){
    semRegex = 2;
    // console.log(semRegex);
  }
  if(semester.startsWith('winter')){
    semRegex = 4;
  }
  if(semester.startsWith('summer')){
    console.log("this is summer and works");
  }

  myArray.forEach(element => {

    if(element.termCode.endsWith(semRegex.toString())){
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

    var cObj = new classObj(startTime, endTime, day);
    afterFilter.push(cObj);
  }

  });
  return (afterFilter);//We see it in the terminal but idk why it is not a proper JSON object?
}

let tutorialArray=[];
let lecArray=[];
let labArray=[];

function findTutorial(subject,catalog,semester){
  courseSchem.tutSch.find({ 'subject': subject, 'catalog': catalog }
        , 'section termCode classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
        , function (err, result) {
          if (err) {
            console.log("Error!")
          } else {
            tutorialArray= filterForSections(result,semester);
           
            // console.log(tutorialArray);//<= this works 
            // Promise.resolve(tutorialArray);//<= why is it undefined!?!??!
            return (tutorialArray);
          }
        });//end of first block
}

function findLab(subject,catalog,semester){
 
  courseSchem.labSch.find({ 'subject': subject, 'catalog': catalog }
, 'section termCode classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
, function (err, result) {
  if (err) {
    console.log("Error!")
  } else {
    // console.log("result is : " + result.length);
    if(result.length == 0){
      labArray = [];
    }
    else{
      console.log("not supposed to reach here");
      labArray = filterForSections(result,semester);
    }
    return (labArray);//print pas<== return undefined

}})}

function findLec(subject,catalog,semester){
  new Promise(function(resolve,reject){
    courseSchem.lecSch.find({ 'subject': subject, 'catalog': catalog }
  , 'section termCode classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
  , function (err, result) {
    if (err) {
      console.log("Error!")
    } else {
      resolve(result);
 

    }
  });

  }
  ).then(function(result){
    lecArray = filterForSections(result,semester);
    // console.log(lecArray);
    return(lecArray);
  })
  
}

// function makeCourseCatalog(subject,catalog,semester){
//   Promise.all([findLec(subject,catalog,semester), findTutorial(subject,catalog,semester), findLab(subject,catalog,semester)])
// .then(([result1, result2, result3]) => { 
//   makeTrios(result1,result2,result3)
//  })
// .catch(e => console.log("Failed promises" ))

// }//<== Failed promises


function makeCourseCatalog(subject,catalog,semester){
  findLec(subject,catalog,semester).then(re1=>{//<= findLec returns undefined...
    findTutorial(subject,catalog,semester).then(re2=>{
      findLab(subject,catalog,semester).then(re3=>{
        makeTrios(re1,re2,re3);
      })
    })
  })
}


module.exports={
  getSections: function(subject, catalog,semester){
      makeCourseCatalog(subject,catalog,'fall');


      }
    }
 
  
  
  
 





   


 








   


 
