var databaseConstants = require('../PopulateDatabase/databaseConstants');
const courseSchem = require('../schemas/courseSchema')
let subject;
let catalog;
let courseName;
let courseCatalog;

async function main() {
  for (let i = 0; i < databaseConstants.classes.length; i++) {
    subject = databaseConstants.classes[i].substring(0, 4);
    catalog = databaseConstants.classes[i].substring(5);
    // console.log(subject);
    // console.log(catalog);
    var toBePutIn;
    var sectionFall;
    var sectionWinter;
    var sectionSummer;

    courseCatalog = JSON.parse(callCourseCatalogAPI(subject, catalog))[0];
    if (courseCatalog != undefined) {
      courseName = courseCatalog.title;
      let promise1 = new Promise((resolve, reject) => {
        resolve(getSections(subject, catalog, 'fall'));

      })
      let promise2 = new Promise((resolve, reject) => {
        resolve(getSections(subject, catalog, 'winter'));

      })
      let promise3 = new Promise((resolve, reject) => {
        resolve(getSections(subject, catalog, 'summer'));

      })

      let sectionFall = await promise1;
      let sectionWinter = await promise2;
      let sectionSummer = await promise3;


      let lastPromise = new Promise((resolve, reject) => {
        toBePutIn = createCatalogJSONObject(subject + catalog,
          courseCatalog.classUnit,
          getPrerequisite(courseCatalog.prerequisites),
          getCorequisite(courseCatalog.prerequisites),
          sectionFall,
          sectionWinter,
          sectionSummer);

        resolve(toBePutIn);
      })

      // )


      lastPromise.then((result) => {
        databaseConstants.database_service.insertOneInDatabase(result, 'courseCatalog');
      })


    }
  }
}
main();//This run the function to put into the MongoDB


function callCourseCatalogAPI(subject, catalog) {
  databaseConstants.request.open("GET", "https://opendata.concordia.ca/API/v1/course/catalog/filter/"
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





function makeTrios(lec, lab, tut) {
  let trio = null;
  arrayTrios = [];

  for (i = 0; i < lec.length; i++) {

    if (lab.length == 0 && tut.length == 0) {
      trio = new sectionObj(lec[i], "", "");
      arrayTrios.push(trio);
    }

    if (lab.length == 0 && tut.length > 0) {

      for (x = 0; x < tut.length; x++) {

        trio = new sectionObj(lec[i], "", tut[x]);
        arrayTrios.push(trio);

      }

    }

    if (tut.length == 0 && lab.length > 0) {
      for (y = 0; y < lab.length; y++) {
        trio = new sectionObj(lec[i], lab[y], null);
        arrayTrios.push(trio);
      }
    }

    if (lab.length > 0 && tut.length > 0) {
      for (y = 0; y < lab.length; y++) {

        for (x = 0; x < tut.length; x++) {

          trio = new sectionObj(lec[i], lab[y], tut[x]);
          arrayTrios.push(trio);

        }
      }
    }

  }

  return JSON.parse(JSON.stringify(arrayTrios));

}


function classObj(start, end, day) {
  this.startTime = start;
  this.endTime = end;
  this.day = day;


  //  return JSON.parse(" { \"startTime\":\"" + start + "\"," +
  //                                 "\", endTime\":\"" + end + 
  //                                 "\", day\":\"" + day +  "\" }")

}

function sectionObj(lec, lab, tut) {
  this.lecture = lec;
  this.lab = lab;
  this.tutorial = tut;


  // return JSON.parse("{ \"lecture\":\"" + lec + "\"," +
  //                               "\"lab\":\"" + lab + "\"tutorial\":\"" + tut +
  //                               "\"}")
}
function filterForSections(myArray, semester) {
  let semRegex;
  let afterFilter = [];

  if (semester.startsWith('fall')) {
    semRegex = 2;
    // console.log(semRegex);
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

      var cObj = new classObj(startTime, endTime, day);
      afterFilter.push(cObj);
    }

  });
  return (afterFilter);//We see it in the terminal but idk why it is not a proper JSON object?
}


let tutorialArray = [];
let lecArray = [];
let labArray = [];

function findTutorial(subject, catalog, semester) {
  return new Promise(function (resolve, reject) {
    courseSchem.tutSch.find({ 'subject': subject, 'catalog': catalog }
      , 'section termCode classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
      , function (err, result) {
        if (err) {
          reject(err);
        } else {
          tutorialArray = filterForSections(result, semester);


          resolve(tutorialArray);
        }
      });
  }

  )
}

function findLab(subject, catalog, semester) {

  return new Promise(function (resolve, reject) {
    courseSchem.labSch.find({ 'subject': subject, 'catalog': catalog }
      , 'section termCode classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
      , function (err, result) {
        if (err) {
          reject(err);
        } else {
          // console.log("result is : " + result.length);
          if (result.length == 0) {
            labArray = [];
          }
          else {
            labArray = filterForSections(result, semester);
          }
          // console.log(tutorialArray);//this does not work
          resolve(labArray);//print pas<== return undefined

        }
      })
  })
}

function findLec(subject, catalog, semester) {
  return new Promise(function (resolve, reject) {
    courseSchem.lecSch.find({ 'subject': subject, 'catalog': catalog }
      , 'section termCode classStartTime classEndTime modays tuesdays wednesdays thursdays fridays'
      , function (err, result) {
        if (err) {
          reject(err);
        } else {
          lecArray = filterForSections(result, semester);
          // console.log(lecArray);
          resolve(lecArray);
        }
      });

  }
  )

}


function getSections(subject, catalog, semester) {
  var a;
  var b;
  var c;
  var d;
  var finalR;
  var JSONfinal;

  //   a = findLec(subject,catalog,semester);
  //   b = findTutorial(subject,catalog,semester);
  //   c = findLab(subject,catalog,semester);
  //   finalR= makeTrios(a,b,c);
  //  console.log(finalR) ;
  //  return finalR;

  return new Promise((resolve, reject) => {

    // var testing = makeCourseCatalog(subject, catalog, 'fall');
    // console.log(testing);
    // resolve(makeCourseCatalog(subject, catalog, 'fall'));

    async function f() {
      a = new Promise((resolve, reject) => {
        resolve(findLec(subject, catalog, 'fall'));
      })

      b = new Promise((resolve, reject) => {
        resolve(findTutorial(subject, catalog, 'fall'));
      })

      c = new Promise((resolve, reject) => {
        resolve(findLab(subject, catalog, 'fall'));
      })
      let resultat1 = await a;
      let resultat2 = await b;
      let resultat3 = await c;


      d = new Promise((resolve, reject) => {
        resolve(makeTrios(resultat1, resultat2, resultat3));
      })

      finalR = await d;
      console.log(a);
      console.log("****************************************");

      JSONfinal = "{" + JSON.stringify(finalR) + "}";

    }
    f();

    resolve(a)//This works because a return a proper JSON object I am assuming??
    // resolve(finalR);//While this does not work because the object I am returning from the MakeTrios is not a proper JSON object?
  })



}

