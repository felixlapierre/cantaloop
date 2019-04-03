var expect = require('chai').expect;
var Scheduler = require('./../scheduler');
var db = require('./../../database/services/database-service');

describe('createSchedules', () => {
    after(() => {
        db.disconnect();
    })
    
    it ('should generate schedules when using catalog from db', async () => {
        var catalog = await db.getCourseCatalog();

        expect(catalog).to.not.be.undefined;
    });
})