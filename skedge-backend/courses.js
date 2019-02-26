var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var classes = ["SOEN-298","SOEN 422","SOEN 423","SOEN 448","SOEN 491","SOEN 387","SOEN 487","SOEN 228","SOEN 287",
"SOEN 321","SOEN 331","SOEN 341","SOEN 342","SOEN 343","SOEN 344","SOEN 345","SOEN 357","SOEN 384",
"SOEN 385","SOEN 390","SOEN 490","COMP 232","COMP 248","COMP 249","COMP 335","COMP 346","COMP 348",
"COMP 345","COMP 353","COMP 371","COMP 426","COMP 428","COMP 442","COMP 445","COMP 451","COMP 465",
"COMP 472","COMP 473","COMP 474","COMP 478","COMP 479","COMP 376","COMP 476","COMP 477","COMP 444",
"COMP 352","BIOL 206","BIOL 261","CHEM 217","CHEM 221","CIVI 231","ELEC 321","ELEC 275","ENGR 242",
"ENGR 243","ENGR 251","ENGR 361","ENGR 201","ENGR 202","ENGR 213","ENGR 411","ENGR 371","ENGR 391",
"ENGR 301","MECH 221","PHYS 252","PHYS 284","PHYS 385","AERO 480","AERO 482"];

var myData;
var filteredJSON;
for (var i=0; i<classes.length; i++){
	console.log(classes[i].substring(0,4));
	console.log(classes[i].substring(5));
	myData = callWebAPI(classes[i].substring(0,4), classes[i].substring(5));
	filteredJSON = retrieveLastThreeSemesterData(JSON.parse(myData), {classStartDate: '07/01/2019'});
	console.log(removeUnwantedAttributes(filteredJSON));
}

function callWebAPI(subject, catalog){
	var userName = "144";
	var passWord = "d4a992f7c25f4fb53ec1de9f0222a83d";
	
	var request = new XMLHttpRequest();
	request.open("GET", "https://opendata.concordia.ca/API/v1/course/schedule/filter/*/"+ subject +"/" + catalog, false, userName, passWord);
	request.send();
	console.log(request.status);
	
	return myData = request.responseText;
}

function retrieveLastThreeSemesterData(myObject, myCriteria){
  return myObject.filter(function(obj) {
    return Object.keys(myCriteria).every(function(c) {
      return obj[c] == myCriteria[c];
    });
  });

}

function removeUnwantedAttributes (filtered_json){
	for (var elements in filtered_json){
		delete filtered_json[elements].courseID;
		delete filtered_json[elements].termCode;
		delete filtered_json[elements].componentDescription;
		delete filtered_json[elements].classNumber;
		delete filtered_json[elements].classAssociation;
		delete filtered_json[elements].topicID;
		delete filtered_json[elements].topicDescription;
		delete filtered_json[elements].classStatus;
		delete filtered_json[elements].departmentCode;
		delete filtered_json[elements].departmentDescription;
		delete filtered_json[elements].facultyCode;
		delete filtered_json[elements].facultyDescription;
		delete filtered_json[elements].currentEnrollment;
		delete filtered_json[elements].waitlistCapacity;
		delete filtered_json[elements].currentWaitlistTotal;
		delete filtered_json[elements].hasSeatReserved;
	}
	
	return filtered_json;
}