import React, { Component } from 'react';
import '../styles/UserPage.css';
import { Dropdown, Button } from 'semantic-ui-react';
import CourseItems from './CourseItems.js';
import SemesterItems from './SemesterItems.js';
import axios from "axios";

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
    this.validateSubmission = this.validateSubmission.bind(this);
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

  validateSubmission(coursesPayload){
    var errorString = '';
    var problem = false;
    if(coursesPayload.courseSequence.length === 0){
      errorString += "Add Courses to Course Sequence\n";
      problem = true;
    }
    if(coursesPayload.semesters.length === 0){
      errorString += "Add Semesters\n";
      problem = true;
    } else {
      var validSemesterObject = true;
      for (var i in coursesPayload.semesters){
        if(coursesPayload.semesters[i].year === '' ||
            coursesPayload.semesters[i].numCourses === '' ||
            coursesPayload.semesters[i].credits === '') {
          validSemesterObject = false;
          break;
        }
      }
    }
    if(validSemesterObject === false) {
      errorString += "Enter valid Semesters\n";
      problem = true;
    }
    if(problem){
      alert(errorString);
      return false;
    }
    return true;

  }

  handleCourseSubmission(){
    let coursesPayload = this.formatRecordAndCourseSequence();
<<<<<<< HEAD
    if(this.validateSubmission(coursesPayload) === false){
      return;
    }
    window.sessionStorage.setItem('courseSequence', JSON.stringify(coursesPayload.courseSequence));
=======
    window.sessionStorage.setItem('courseSequence', JSON.stringify(this.state.courseItems));
>>>>>>> dcd3335b2cea9b80a0cc270587655d0293c68958
    window.sessionStorage.setItem('courseRecord', JSON.stringify(coursesPayload.courseRecord));
    window.sessionStorage.setItem('semesters', JSON.stringify(coursesPayload.semesters));
    window.sessionStorage.setItem('courseOptions', JSON.stringify(this.state.courseOptions));
    var that = this;
    axios.post('/builder/genSchedules', coursesPayload).then(response => {
<<<<<<< HEAD
      console.log(response.data);
=======
>>>>>>> dcd3335b2cea9b80a0cc270587655d0293c68958
      that.props.history.push('/schedule');
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
              Hi! Welcome to
          </h3>
          <h2 className="skedge"> Skedge</h2>
              <br/>
              <br/>

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
          <Button id = "goToScheduleBuilder" onClick = {this.handleCourseSubmission}>Make My Schedule</Button>
      </div>
    );
  }
}

export default UserRecordPage;
