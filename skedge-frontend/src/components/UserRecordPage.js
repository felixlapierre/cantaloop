import React, { Component } from 'react';
import '../styles/UserPage.css';
import { Dropdown, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import CourseItems from './CourseItems.js';

const courseOptions = [
  {
    key: 'COMP 232',
    value: 'Math for CompSci',
    text: 'Math for CompSci',
  },
  {
    key: 'COMP 248',
    value: 'OOP 1',
    text: 'OOP 1'
  },
  {
    key: 'ENGR 202',
    value: 'Prof. Practice and Responsibility',
    text: 'Prof. Practice and Responsibility'
  },
  {
    key: 'ENGR 213',
    value: 'ODE 1',
    text: 'ODE 1'
  },
  {
    key: 'ENGR 251',
    value: 'Thermodynamics',
    text: 'Thermodynamics'
  },
  {
    key: 'COMP 249',
    value: 'OOP 2',
    text: 'OOP 2'
  },
  {
    key: 'ENGR 233',
    value: 'ODE 2',
    text: 'ODE 2'
  },
  {
    key: 'SOEN 228',
    value: 'Hardware',
    text: 'Hardware'
  },
  {
    key: 'SOEN 287',
    value: 'Web Programming',
    text: 'Web Programming'
  },
  {
    key: 'PHYS 252',
    value: 'Waves and Optics',
    text: 'Waves and Optics'
  }
]

//The page where the user can change its record etc.
class UserRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordItems : [],
      courseItems : [],
      currentRecordItem: {text: '', key: ''},
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
    for(var i in recordItems){
      var courseCodeR = recordItems[i].key;
      var capitalizedCourseCodeR = courseCodeR.toUpperCase();
      recordArray.push(capitalizedCourseCodeR.replace(/\s/g, ''));
    }
    for(var j in this.state.courseItems){
      var courseCodeCS = courseItems[j].key;
      var capitalizedCourseCodeCS = courseCodeCS.toUpperCase();
      courseSequenceArray.push(capitalizedCourseCodeCS.replace(/\s/g, ''));
    }
    
    return {
      "record": recordArray,
      "courseSequence": courseSequenceArray
    }
  }

  handleCourseSubmission(){
    let coursesPayload = this.formatRecordAndCourseSequence();
    console.log(coursesPayload.record);
    console.log(coursesPayload.courseSequence);
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
                        options = {courseOptions}
                        onChange = {this.handleRecordInput}
                        />
                    </div>
                    <Button id = "button1" onClick = {this.addRecordItem}>Add Course</Button>
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
                        options = {courseOptions}
                        onChange = {this.handleCourseInput}
                        />
                    </div>
                    <Button id = "button2"  onClick = {this.addCourseItem}>Add Course</Button>
                  </form>
                  <div id = "recordCourses">
                      <CourseItems entries={this.state.recordItems} deleteItem = {this.deleteRecordItem} />
                  </div>
                  <div id = "wantedCourses">
                      <CourseItems entries={this.state.courseItems} deleteItem = {this.deleteCourseItem} />
                  </div>
            </div>
          <div>
          <Link to='/schedule'><Button id = "goToScheduleBuilder" onClick = {this.handleCourseSubmission}>
          Make My Schedule
          </Button></Link>
          </div>
      </div>
    );
  }
}

export default UserRecordPage;
