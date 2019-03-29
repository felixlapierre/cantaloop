const database_services = require('./database-service');

module.exports = {
    getCoursesDescription: function () {
        return database_services.getCoursesDescription();
    },

    getCourseCatalog: function () {
        return database_services.getCourseCatalog();
    },

    createUser: function (objectJS) {
      return database_services.createUser(objectJS);
    },

    checkUserCredential: function (objectJSON) {
      return database_services.userLogin(objectJSON)
    }
};
