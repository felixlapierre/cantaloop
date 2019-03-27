import React, { Component } from 'react';
import { Button, Input, Radio } from 'semantic-ui-react';
import '../styles/SemesterItems.css';

//blob that has a name and class code
class SemesterItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year : "",
      semester : "",
      numCredits : "",
      numCourses : "",
      currentSemester : {year: "", semester: "", numCredits: "", numCourses: ""},
      semesters : []
    }
    this.handleAddSemester = this.handleAddSemester.bind(this);
    this.handleShareholderNameChange = this.handleShareholderNameChange.bind(this);
    this.handleRemoveShareholder = this.handleRemoveShareholder.bind(this);
    this.handleSemesterNameChange = this.handleSemesterNameChange.bind(this);
    this.handleCheckState = this.handleCheckState.bind(this);
  }

  handleShareholderNameChange(index, event) {
    console.log(index + " changed");
    console.log(event.target.value);
    console.log("before: " + this.state.semesters[index].year);
    var newSemesters = this.state.semesters;
    newSemesters[index].year = event.target.value;
    console.log("after: " + newSemesters[index].year);
    this.setState({
        semesters: newSemesters
    })
  }

  handleSemesterNameChange(index, event){
    console.log("index: " + index);
    console.log("event.target.value: " + event.target.value)
    console.log("radio clicked, value of semesterName is " )
    var newSemesters = this.state.semesters;
  //  newSemesters[index].semesterName = value;
    this.setState({
      //semesters: newSemesters
    })
  }

  handleRemoveShareholder(index) {
    console.log(index + " remove");
    var newSemesters = [];
    for(var i = 0; i < this.state.semesters.length; i++){
      console.log("i = " + i + " and index = " + index + " and value = " + this.state.semesters[i]);
      if(i !== index){
        newSemesters.push(this.state.semesters[i])
      }
    }
    console.log(newSemesters);
    this.setState ({
      semesters: newSemesters
    })
  }


  handleAddSemester(event){
    event.preventDefault();
    console.log("add semester");
    const newSemesters = this.state.semesters.concat([{ year: '' }])
    this.setState({
      semesters: newSemesters
    });
    console.log(this.state.semesters);
  }

  handleCheckState(event){
    event.preventDefault();
    console.log(this.state.semesters);
  }

  render() {
    return (
      <form>
      {this.state.semesters.map((semester, index) => (
          <div className="semesterObject" key={index}>
            <Input placeholder={`Year`}
            value={semester.year}
            onChange={this.handleShareholderNameChange.bind(this, index)}
            label="Year"
            />
            <br/>
            <Radio
            label='Winter'
            name={"group" + index.toString()}
            value='Winter'
            checked={semester.semesterName === 'Winter'}
            onChange={this.handleSemesterNameChange.bind(this, index)}
            />
            <br/>
            <Radio
            label='Fall'
            name={"group" + index.toString()}
            value='Fall'
            checked={semester.semesterName === 'Fall'}
            onChange={this.handleSemesterNameChange.bind(this, index)}
            />
            <br/>
            <Radio
            label='Summer'
            name={"group" + index.toString()}
            value='Summer'
            checked={semester.semesterName === 'Summer'}
            onChange={this.handleSemesterNameChange.bind(this, index)}
            />
            <br/>
            <Button type="button" onClick={this.handleRemoveShareholder.bind(this, index)}>
              -
            </Button>
          </div>
        ))}

        <Button onClick={this.handleAddSemester}>Add Semester</Button>
        <br/>
        <Button onClick={this.handleCheckState}>Check Semesters Object!</Button>

      </form>
    );
  }
}


export default SemesterItems;
