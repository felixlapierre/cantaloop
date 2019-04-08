var expect = require('chai').expect;
var checkDayOverlap= require('../../semester-generation/overlaps.js').checkDayOverlap;
var convertTimeToInt= require('../../semester-generation/overlaps.js').convertTimeToInt;
var  computeTimeOverlap= require('../../semester-generation/overlaps.js').computeTimeOverlap;

describe('checkDayOverlap', function() {

    it('should assign value 0 for online course with days code \'TBD\'', function(){
        // Arrange
        var someClass = { "days":"Tu" };
        var someClassThatIsOnline = { "days":"TBD" };

        // Act
        var overlapAmount = checkDayOverlap(someClass["days"], someClassThatIsOnline["days"]);

        // Assert
        expect(overlapAmount).to.equal(0);
    });

    it('should assign value 0 for online course with days code \'N\/A\'', function(){
        // Arrange
        var someClass = { "days":"Tu" };
        var someClassThatIsOnline = { "days":"N\/A" };

        // Act
        var overlapAmount = checkDayOverlap(someClass["days"], someClassThatIsOnline["days"]);

        // Assert
        expect(overlapAmount).to.equal(0);
    });

    it('should assign value 0 for classes happening on different day', function(){
        /// Arrange
        var someClass = { "days":"Tu" };
        var someClassThatIsOnADifferentDay = { "days":"Th" };

        // Act
        var overlapAmount = checkDayOverlap(someClass["days"], someClassThatIsOnADifferentDay["days"]);

        // Assert
        expect(overlapAmount).to.equal(0);
    });

    it('should assign value 1 for two courses happening on the same day', function(){
        // Arrange
        var someClass = { "days":"Tu" };
        var someClassHappeningOnTheSameDay = { "days":"Tu" };
        // Act
        var overlapAmount = checkDayOverlap(someClass["days"], someClassHappeningOnTheSameDay["days"]);

        // Assert
        expect(overlapAmount).to.equal(1);
    });

    it('should assign value 1 for a course with one of two days in common', function(){
        // Arrange
        var someClass = { "days":"Tu" };
        var someClassWithOneDayInCommon = { "days":"TuThu" };
        // Act
        var overlapAmount = checkDayOverlap(someClass["days"], someClassWithOneDayInCommon["days"]);

        // Assert
        expect(overlapAmount).to.equal(1);
    });

    it('should assign value 1 for two two-day courses with one day in common', function(){
        // Arrange
        var someClass = { "days":"MoWe" };
        var someClassWithOneDayInCommon = { "days":"WeFr" };
        // Act
        var overlapAmount = checkDayOverlap(someClass["days"], someClassWithOneDayInCommon["days"]);

        // Assert
        expect(overlapAmount).to.equal(1);
    });

    it('should assign value 2 for two two-day courses with two days in common', function(){
        // Arrange
        var someClass = { "days":"MoWe" };
        var someClassWithTwoDaysInCommon = { "days":"MoWe" };
        // Act
        var overlapAmount = checkDayOverlap(someClass["days"], someClassWithTwoDaysInCommon["days"]);

        // Assert
        expect(overlapAmount).to.equal(2);
    });

});

describe('convertTimeToInt', function(){
    it('should return value 60 for time \'01:00\'', function(){
        // Arrange
        var timeString = '01:00'

        // Act
        var intValueOfTimeInMinutes = convertTimeToInt(timeString);

        // Assert
        expect(intValueOfTimeInMinutes).to.equal(60);
    });

    it('should return value 45 for time \'00:45\'', function(){
        // Arrange
        var timeString = '00:45'

        // Act
        var intValueOfTimeInMinutes = convertTimeToInt(timeString);

        // Assert
        expect(intValueOfTimeInMinutes).to.equal(45);
    });
    
    it('should return value 165 for time \'02:45\'', function(){
        // Arrange
        var timeString = '02:45'

        // Act
        var intValueOfTimeInMinutes = convertTimeToInt(timeString);

        // Assert
        expect(intValueOfTimeInMinutes).to.equal(165);
    });
});

describe('computeTimeOverlap', () => {

    it('should return 0 if SomeClass ends before SomeOtherClass', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 0;
        SomeClass[1] = 2;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 3;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(0);
    });

    it('should return the difference if SomeClass ends after SomeOtherClass starts', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 0;
        SomeClass[1] = 3;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(1);
    });

    it('should return 0 if SomeClass ends when SomeOtherClass starts', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 0;
        SomeClass[1] = 2;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(0);
    });

    it('should return the duration of SomeOtherClass happening during Some Class', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 2;
        SomeClass[1] = 5;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 3;
        SomeOtherClass[1] = 4;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(1);
    });

    it('should return the duration of SomeOtherClass happening during SomeClass and ending at the same time', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 2;
        SomeClass[1] = 5;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 3;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(2);
    });

    it('should return 0 if SomeOtherClass ends before SomeClass starts', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 4;
        SomeClass[1] = 5;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 3;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(0);
    });

    it('should return the duration of SomeClass happening during SomeOtherClass', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 2;
        SomeClass[1] = 4;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 3;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(1);
    });

    it('should return 0 if SomeOtherClass ends when SomeClass starts', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 4;
        SomeClass[1] = 5;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 4;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(0);
    });

    it('should return the duration of SomeClass happening during SomeOtherClass', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 3;
        SomeClass[1] = 4;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(1);
    });

    it('should return the duration of SomeClass happening during SomeOtherClass and ending at the same time', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 3;
        SomeClass[1] = 5;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(2);
    });

    it('should return the duration of SomeClass if SomeClass and SomeOtherClass start at the same time but SomeClass ends first', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 2;
        SomeClass[1] = 4;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 5;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(2);
    });

    it('should return the duration of SomeOtherClass if SomeClass and SomeOtherClass start at the same time but SomeOtherClass ends first', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 2;
        SomeClass[1] = 5;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 4;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(2);
    });

    it('should return the duration of SomeClass if SomeClass and SomeOtherClass start and end at the same time', () => {
        // Arrange 
        var SomeClass = [];
        SomeClass[0] = 2;
        SomeClass[1] = 4;

        var SomeOtherClass = [];
        SomeOtherClass[0] = 2;
        SomeOtherClass[1] = 4;

        var time = [];
        time[0] = SomeClass;
        time[1] = SomeOtherClass;

        // Act
        var overlap  = computeTimeOverlap(time);

        // Assert
        expect(overlap).to.equal(2);
    });
});