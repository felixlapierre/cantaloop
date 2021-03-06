import React, { Component } from 'react';
import { Button, Input, Radio } from 'semantic-ui-react';
import '../styles/SemesterItems.css';

const Season = {
    Fall: "fall",
    Winter: "winter",
    Summer: "summer"
}

//blob that has a name and class code
class SemesterItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semesters : []
    }
    this.handleAddSemester = this.handleAddSemester.bind(this);
    this.handleSemesterYearChange = this.handleSemesterYearChange.bind(this);
    this.handleSemesterSeasonChange = this.handleSemesterSeasonChange.bind(this);
    this.handleSemesterCreditsChange = this.handleSemesterCreditsChange.bind(this);
    this.handleRemoveSemester = this.handleRemoveSemester.bind(this);
    this.findNextSemester = this.findNextSemester.bind(this);
  }

  componentWillMount(){
    const givenSemesters = this.props.semesters;
    this.setState({
      semesters: givenSemesters
    })
  }

  updateSemesters() {
      this.props.handleUpdateSemesters(this.state.semesters);
  }

  handleSemesterYearChange(index, event) {
    var newSemesters = this.state.semesters;
    newSemesters[index].year = event.target.value;
    this.setState({
        semesters: newSemesters},
        this.updateSemesters
    )
  }

  handleSemesterSeasonChange(index, event){
    var newSemesters = this.state.semesters;
    newSemesters[index].season = event.target.innerText.toLowerCase();
    this.setState({
      semesters: newSemesters},
      this.updateSemesters
    )
  }

  handleSemesterCreditsChange(index, event){
    var newSemesters = this.state.semesters;
    newSemesters[index].credits = event.target.value;
    this.setState({
        semesters: newSemesters},
        this.updateSemesters
      )
  }

  handleSemesterNumCoursesChange(index, event) {
    var newSemesters = this.state.semesters;
    newSemesters[index].numCourses = event.target.value;
    this.setState({
        semesters: newSemesters},
        this.updateSemesters
    )
  }

  handleRemoveSemester(index) {
    var newSemesters = [];
    for(var i = 0; i < this.state.semesters.length; i++){
      if(i !== index){
        newSemesters.push(this.state.semesters[i])
      }
    }
    this.setState ({
      semesters: newSemesters},
      this.updateSemesters
    )
  }

  handleAddSemester(event){
    event.preventDefault();
    var nextSemester = this.findNextSemester();
    const newSemesters = this.state.semesters.concat([{ year: nextSemester.year, season: nextSemester.season, credits: '15', numCourses: '5', restrictions: []}])
    this.setState({
      semesters: newSemesters},
      this.updateSemesters
    );
  }

  findNextSemester(){
    var semesters = this.state.semesters
    var newYear;
    var newSeason;
    if(semesters.length === 0){
      return {
        "year" : '2019',
        "season" : Season.Fall
      }
    }
    if(semesters[semesters.length-1].season === Season.Fall){
       newYear = (Number(semesters[semesters.length-1].year) + 1).toString();
    } else {
       newYear = semesters[semesters.length-1].year
    }
    switch(semesters[semesters.length-1].season){
      case Season.Fall :
        newSeason = Season.Winter;
        break;
      case Season.Winter :
      case Season.Summer :
      default :
        newSeason = Season.Fall;
        break;
    }
    return{
      "year" : newYear,
      "season" : newSeason
    }
  }

  render() {
    return (
      <div>
      {this.state.semesters.map((semester, index) => (
            <div className="semesterObject" key={index}>
            <Radio
            label='Fall'
            name={"group" + index.toString()}
            value={Season.Fall}
            checked={semester.season === Season.Fall}
            onChange={this.handleSemesterSeasonChange.bind(this, index)}
            />
            <br/>
            <Radio
            label='Winter'
            name={"group" + index.toString()}
            value={Season.Winter}
            checked={semester.season === Season.Winter}
            onChange={this.handleSemesterSeasonChange.bind(this, index)}
            />
            <br/>
            <Radio
            label='Summer'
            name={"group" + index.toString()}
            value={Season.Summer}
            checked={semester.season === Season.Summer}
            onChange={this.handleSemesterSeasonChange.bind(this, index)}
            />
            <br/>
            <Input placeholder={`Year`}
            type='number'
            value={semester.year}
            onChange={this.handleSemesterYearChange.bind(this, index)}
            label="Year"
            />
            <br/>
            <br/>
            <Input
            placeholder={`Number of Credits`}
            type='number'
            value={semester.credits}
            onChange={this.handleSemesterCreditsChange.bind(this, index)}
            label="Credits"
            />
            <br/>
            <br/>
            <Input placeholder={`Number of Courses`}
            type='number'
            value={semester.numCourses}
            onChange={this.handleSemesterNumCoursesChange.bind(this, index)}
            label="Courses"
            />
            <br/>
            <br/>
            <Button id="removeSemesterButton" type="button" onClick={this.handleRemoveSemester.bind(this, index)}>
              Remove Semester
            </Button>
            <br/>
          </div>
        ))}
        <Button id="addSemesterButton" onClick={this.handleAddSemester}>Add Semester</Button>
        </div>
    );
  }
}


export default SemesterItems;
