import databaseConstants from 'databaseConstants';

let subject;
let catalog;
let retrievedData;
let lectures;
let tutorials;
let labs;

for (let i = 0; i <databaseConstants.classes.length; i++) {
	subject = databaseConstants.classes[i].substring(0, 4);
	catalog = databaseConstants.classes[i].substring(5);
	console.log(subject);
	console.log(catalog);

	retrievedData = retrieveLastThreeSemesterData(
	    removeUnwantedAttributes(
	        callCourseScheduleAPI(subject, catalog)));

	lectures = retrieveSpecificCourses(retrievedData, { componentCode: 'LEC' });
	tutorials = retrieveSpecificCourses(retrievedData, { componentCode: 'TUT' });
	labs = retrieveSpecificCourses(retrievedData, { componentCode: 'LAB' });

	databaseConstants.database_service.insertManyInDatabase(retrievedData, 'courses');
	databaseConstants.database_service.insertManyInDatabase(lectures, 'lectures');
	databaseConstants.database_service.insertManyInDatabase(tutorials, 'tutorials');
	databaseConstants.database_service.insertManyInDatabase(labs, 'labs');
}

function callCourseScheduleAPI(subject, catalog) {
	databaseConstants.request.open("GET", "https://opendata.concordia.ca/API/v1/course/schedule/filter/*/"
        + subject + "/" + catalog, false, databaseConstants.userName, databaseConstants.passWord);
	databaseConstants.request.send();
	console.log(databaseConstants.request.status);
	return databaseConstants.request.responseText;
}

function retrieveSpecificCourses(myObject, myCriteria) {
	return myObject.filter(function (obj) {
		return Object.keys(myCriteria).every(function (c) {
			return obj[c] == myCriteria[c];
		});
	});
}

function removeUnwantedAttributes(filteredJSON) {
	for (let elements in filteredJSON) {
		delete filteredJSON[elements].courseID;
		delete filteredJSON[elements].componentDescription;
		delete filteredJSON[elements].classNumber;
		delete filteredJSON[elements].classAssociation;
		delete filteredJSON[elements].topicID;
		delete filteredJSON[elements].topicDescription;
		delete filteredJSON[elements].classStatus;
		delete filteredJSON[elements].departmentCode;
		delete filteredJSON[elements].departmentDescription;
		delete filteredJSON[elements].facultyCode;
		delete filteredJSON[elements].facultyDescription;
		delete filteredJSON[elements].currentEnrollment;
		delete filteredJSON[elements].waitlistCapacity;
		delete filteredJSON[elements].currentWaitlistTotal;
		delete filteredJSON[elements].hasSeatReserved;
	}
	return filteredJSON;
}

function retrieveLastThreeSemesterData(retrievedData) {
	let summerData = retrieveSpecificCourses(JSON.parse(retrievedData), { termCode: '2190' });
	let fallData = retrieveSpecificCourses(JSON.parse(retrievedData), { termCode: '2192' });
	let winterData = retrieveSpecificCourses(JSON.parse(retrievedData), { termCode: '2194' });
	let latestData = summerData.concat(fallData.concat(winterData));
	return latestData;
}
