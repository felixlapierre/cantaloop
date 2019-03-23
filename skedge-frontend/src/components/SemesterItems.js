import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/SemesterItems.css';

//blob that has a name and class code
class SemesterItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year : '',
      semester : '',
      numCredits : '',
      numCourses : '',
      currentSemester : {year: '', semester: '', numCredits: '', numCourses: ''},
      listOfSemesters : []
    }
    this.createSemester = this.createSemester.bind(this);
    this.addSemester = this.addSemester.bind(this);
  }

  createSemester() {
    return (
      <div>
      <li>
        <div>
        year: 2019
        <br/>
        semester: winter
        <br/>
        numCredits: 20
        <br/>
        numCourses: 5
        </div>
      </li>
      <button>Edit</button>
      </div>
    );
  }

  addSemester(){
    var currentItem = "sfasfassafsafa";
    const items = [...this.state.listOfCourses, currentItem]
    this.setState({
       listOfSemesters: items,
     })
  }

  render() {
    const selectedCourses = this.props.entries;
    const listOfSemesters = this.createSemester;

    return (
        <ul className="theSemesterList">
        {listOfSemesters}
        <Button onClick = {this.addSemester} >Add Semester</Button>
        </ul>
    );
  }
}


export default SemesterItems;
