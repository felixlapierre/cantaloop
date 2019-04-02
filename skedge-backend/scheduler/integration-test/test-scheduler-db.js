var expect = require('chai').expect;
var Scheduler = require('./../scheduler');
var db = require('./../../database/services/database-service');

describe('createSchedules', () => {
    it ('should generate schedules when using catalog from db', () => {
        var catalog = db.getCourseCatalog();

        expect(catalog).to.not.be.undefined;
        db.disconnect();
    })
})