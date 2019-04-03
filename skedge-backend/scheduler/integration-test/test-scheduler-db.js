var expect = require('chai').expect;
var Scheduler = require('./../scheduler');
var db = require('./../../database/services/database-service');

//Skip flaky test that requires database connection
//until it can be isolated from the rest of the tests
describe.skip('createSchedules', () => {
    after(() => {
        db.disconnect();
    })
    
    it ('should generate schedules when using catalog from db', async () => {
        var catalog = await db.getCourseCatalog();

        expect(catalog).to.not.be.undefined;
    });
})