import React, { Component } from 'react';
import '../styles/UserPage.css';
import { Dropdown, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import CourseItems from './CourseItems.js';
import SemesterItems from './SemesterItems.js';
import axios from "axios"

//The page where the user can change its record etc.
class UserRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordItems : [],
      courseItems : [],
      semesters : [],
      courseOptions : [],
      currentRecordItem: {text: '', key: ''},
      currentCourseItem: {text: '', key: ''}
    }
    this.handleRecordInput = this.handleRecordInput.bind(this);
    this.handleCourseInput = this.handleCourseInput.bind(this);
    this.addRecordItem = this.addRecordItem.bind(this);
    this.addCourseItem = this.addCourseItem.bind(this);
    this.deleteRecordItem = this.deleteRecordItem.bind(this);
    this.deleteCourseItem = this.deleteCourseItem.bind(this);
    this.formatRecordAndCourseSequence = this.formatRecordAndCourseSequence.bind(this);
    this.handleCourseSubmission = this.handleCourseSubmission.bind(this);
  }

  componentDidMount() {
      let header = {
          'Authorization': "Bearer " + window.sessionStorage.getItem('token')
      };
    axios.get('/courses/getNames')
      .then(res => {
        this.setState({ courseOptions: this.formatCourseListForDropdown(res.data)})
      }).catch(function (error) {
        console.log(error);
      });

      axios.get('/secureEndpoint', {headers: header})
          .then(res => console.log(JSON.stringify(res)));
  }

  formatCourseListForDropdown(courseList) {
    var courseListArray = [];
    Object.keys(courseList).forEach( courseID => {
      let optionEntry = {};
      optionEntry.key = courseID;
      optionEntry.value = [courseID.slice(0, 4), " ", courseID.slice(4)].join('') + " - " + courseList[courseID].name;
      optionEntry.text = [courseID.slice(0, 4), " ", courseID.slice(4)].join('') + " - " + courseList[courseID].name;
      courseListArray.push(optionEntry);
    });

    return courseListArray;
  }

  handleRecordInput(event, data) {
    const itemText = data.value;
    var itemKey = "";
    for (var i in data.options){
      if(data.options[i].text === itemText){
        itemKey = data.options[i].key;
      }
    }
    const currentItem = { text: itemText, key: itemKey };

    this.setState({
      currentRecordItem: currentItem
    })
  }

  handleCourseInput(event, data) {
    const itemText = data.value;
    var itemKey = "";
    for (var i in data.options){
      if(data.options[i].text === itemText){
        itemKey = data.options[i].key;
      }
    }
    const currentItem = { text: itemText, key: itemKey };

    this.setState({
      currentCourseItem: currentItem
    })
  }

  addRecordItem(event) {
    event.preventDefault();
    const currentItem = this.state.currentRecordItem;
    if(currentItem.text !== "" && !this.arrayItemsContainsItem(this.state.recordItems, currentItem)){
      const items = [...this.state.recordItems, currentItem]
      this.setState({
         recordItems: items,
         currentRecordItem: { text: '', key: '' },
       })
   }
  }

  addCourseItem(event) {
    event.preventDefault();
    const currentItem = this.state.currentCourseItem;
    if(currentItem.text !== "" && !this.arrayItemsContainsItem(this.state.courseItems, currentItem)){
      const items = [...this.state.courseItems, currentItem]
      this.setState({
         courseItems: items,
         currentCourseItem: { text: '', key: '' },
       })
   }
  }

  arrayItemsContainsItem(array, keyValuePair){
    for(var i in array){
      if(array[i].key === keyValuePair.key && array[i].value === keyValuePair.value){
        return true;
      }
    }
    return false;
  }

  deleteRecordItem(key){
    const filteredItems = this.state.recordItems.filter(item => {
      return item.key !== key
    })
    this.setState({
      recordItems: filteredItems
    })
  }

  deleteCourseItem(key){
    const filteredItems = this.state.courseItems.filter(item => {
      return item.key !== key
    })
    this.setState({
      courseItems: filteredItems
    })
  }

  formatRecordAndCourseSequence(){
    var recordArray = [];
    var courseSequenceArray = [];
    var recordItems = this.state.recordItems;
    var courseItems = this.state.courseItems;
    var semesters = this.state.semesters;
    for(var i in recordItems){
      var courseCodeR = recordItems[i].key;
      var capitalizedCourseCodeR = courseCodeR.toUpperCase();
      recordArray.push(capitalizedCourseCodeR.replace(/\s/g, ''));
    }
    for(var j in courseItems){
      var courseCodeCS = courseItems[j].key;
      var capitalizedCourseCodeCS = courseCodeCS.toUpperCase();
      courseSequenceArray.push(capitalizedCourseCodeCS.replace(/\s/g, ''));
    }

    return {
      "courseRecord": recordArray,
      "courseSequence": courseSequenceArray,
      "semesters": semesters
    }
  }

  handleCourseSubmission(){
    let coursesPayload = this.formatRecordAndCourseSequence();
    console.log("sending:")
    console.log("courseRecord: " + coursesPayload.courseRecord);
    console.log("course sequence: " + coursesPayload.courseSequence);
    console.log("semesters: " + coursesPayload.semesters);
    axios.post('/builder/genSchedules', coursesPayload).then(response => {
      console.log("Received: ");
      console.log(response.data);
    });
  }

  handleUpdateSemesters(_State){
    this.setState({
      semesters : _State.semesters
    })
  }

  render() {
    return (
      <div className = "outer">
          <h3 className = "welcome-title" >
              <br/>
              Hi! Welcome to Skedge
              <br/>
              <br/>
          </h3>
          <div className = "formDiv">
                <form id = "recordCcoursesDropdown">
                    <h5>
                        What classes have you taken?
                    </h5>
                    <div className = "dropdown">
                        <Dropdown
                        placeholder = 'Select Course'
                        fluid
                        search
                        selection
                        options = {this.state.courseOptions}
                        onChange = {this.handleRecordInput}
                        />
                    </div>
                    <Button id = "button1" onClick = {this.addRecordItem}>Add Course</Button>
                    <div id = "recordCourses">
                        <CourseItems entries={this.state.recordItems} deleteItem = {this.deleteRecordItem}/>
                    </div>
                </form>
                <form id = "wantedCoursesDropdown">
                    <h5>
                        What classes would you like to take?
                    </h5>
                    <div className = "dropdown">
                        <Dropdown
                        placeholder = 'Select Course'
                        fluid
                        search
                        selection
                        options = {this.state.courseOptions}
                        onChange = {this.handleCourseInput}
                        />
                    </div>
                    <Button id = "button2"  onClick = {this.addCourseItem}>Add Course</Button>
                    <br/>
                    <div id = "wantedCourses">
                        <CourseItems entries={this.state.courseItems} deleteItem = {this.deleteCourseItem}/>
                    </div>
                </form>
                <div id = "semestersObject">
                <h5>
                    Enter number of semesters and semester info
                </h5>
                <SemesterItems semesters={this.state.semesters} handleUpdateSemesters={(semesters) => this.setState({semesters})}/>
                </div>
            </div>
          <div>

          </div>
          <Link to='/schedule'><Button id = "goToScheduleBuilder" onClick = {this.myCallback}>
          Make My Schedule
          </Button></Link>
      </div>
    );
  }
}

export default UserRecordPage;
