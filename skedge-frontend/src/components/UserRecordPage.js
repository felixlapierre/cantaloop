import React, { Component } from 'react';
import '../styles/UserPage.css';
import { Dropdown, Button } from 'semantic-ui-react';
import CourseItems from './CourseItems.js';
import SemesterItems from './SemesterItems.js';
import { axios_secure as axios } from '../services/AxiosEncrypted';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

//The page where the user can change its record etc.
class UserRecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken : this.props.location.authToken,
      recordItems : [],
      courseItems : [],
      semesters : [],
      courseOptions : [],
      currentRecordItem: {text: '', key: ''},
      currentCourseItem: {text: '', key: ''}
    }
    this.settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    this.handleRecordInput = this.handleRecordInput.bind(this);
    this.handleCourseInput = this.handleCourseInput.bind(this);
    this.addRecordItem = this.addRecordItem.bind(this);
    this.addCourseItem = this.addCourseItem.bind(this);
    this.deleteRecordItem = this.deleteRecordItem.bind(this);
    this.deleteCourseItem = this.deleteCourseItem.bind(this);
    this.formatRecordAndCourseSequence = this.formatRecordAndCourseSequence.bind(this);
    this.handleCourseSubmission = this.handleCourseSubmission.bind(this);
    this.validateSubmission = this.validateSubmission.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  
  componentDidMount() {

    let header = {
      'Authorization': "Bearer " + this.state.authToken
    };
    axios.get('/courses')
    .then(res => {
      this.setState({ courseOptions: this.formatCourseListForDropdown(res.data)})
    }).catch(function (error) {
      console.log(error);
    });

    console.log("Sending POST request to secure endpoint!!!");
    axios.post('test/secureEndpoint', {authToken: this.state.authToken})
    .then(res => {
      console.log('Response from secureEndpoint:');
      console.log(JSON.stringify(res.data));
    });
  }
  
  handleBack(){
      this.slider.slickPrev();
  }

  handleNext(){
      this.slider.slickNext();
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
    if(this.validateSubmission(coursesPayload) === false){
      return;
    }
    window.sessionStorage.setItem('courseSequence', JSON.stringify(this.state.courseItems));
    window.sessionStorage.setItem('courseRecord', JSON.stringify(coursesPayload.courseRecord));
    window.sessionStorage.setItem('semesters', JSON.stringify(coursesPayload.semesters));
    window.sessionStorage.setItem('courseOptions', JSON.stringify(this.state.courseOptions));
    var that = this;
    console.log("SENDING:");
    console.log(coursesPayload);
    axios.post('/builder/genSchedules', coursesPayload).then(response => {
      this.props.history.push({
        pathname: '/schedule',
        authToken: this.state.authToken
      }); 
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
          <Slider class="slick" ref={(sliderInstanceRP) => { this.slider = sliderInstanceRP; }} {...this.settings}>
          <div  class="slick">
              <div className="backgroundDiv">
                <form id = "recordCoursesDropdownAndItems">
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
                    <Button id = "addRecordItemButton" onClick = {this.addRecordItem}>Add Course</Button>
                    <div id = "recordCourseItems">
                        <CourseItems entries={this.state.recordItems} deleteItem = {this.deleteRecordItem}/>
                    </div>
                </form>
              </div>
          </div>
          <div  class="slick">
              <div className="backgroundDiv">
                <form id = "wantedCoursesDropdownAndItems">
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
                    <Button id = "addCourseItemButton"  onClick = {this.addCourseItem}>Add Course</Button>
                    <div id = "wantedCourses">
                        <CourseItems entries={this.state.courseItems} deleteItem = {this.deleteCourseItem}/>
                    </div>
                </form>
              </div>
          </div>
          <div  class="slick">
              <div className="backgroundDiv">
                <div className="semestersList">
                    <h5>
                        Enter number of semesters and semester info
                    </h5>
                    <div className="semesterList">
                      <SemesterItems semesters={this.state.semesters} handleUpdateSemesters={(semesters) => this.setState({semesters})}/>
                    </div>
                </div>
              </div>
          </div>
          </Slider>
          <br/>
          <Button id = "goBack" onClick = {this.handleBack}>Back</Button>
          <Button id = "goNext" onClick = {this.handleNext}>Next</Button>
          <br/>
          <br/>
          <Button id = "goToScheduleBuilder" onClick = {this.handleCourseSubmission}>Make My Schedule</Button>
      </div>
      );
    }
  }
  
  export default UserRecordPage;
  