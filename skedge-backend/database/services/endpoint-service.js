const database_services = require('./database-service');

module.exports = {
    getCoursesDescription: function () {
        return database_services.getCoursesDescription();
    },

    getCourseCatalog: function () {
        return database_services.getCourseCatalog();
    },

    saveSchedule: function(userID){
        return database_services.saveSchedule(userID);
    },

    deleteSchedule: function(userSchedule){
      return database_services.deleteSchedule(userSchedule);
  },
    createUser: function (userJSON) {
      return database_services.createUser(userJSON);
    },

    checkUserCredential: function (userJSON) {
      return database_services.checkUserCredential(userJSON);
    },

    getUserRecord: function(userId){
      return database_services.saveUserRecord(userId);
    },

    saveUserRecord: function(userRecord){
      return database_services.getUserRecord(userRecord);
    }


};
