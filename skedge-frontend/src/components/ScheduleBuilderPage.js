import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import Schedule from './Schedule';
import HeaderPage from './HeaderPage.js';
import TabContent from './TabContent.js';
import { Button, Icon, Menu, Dropdown, List, Grid, Sidebar, Tab} from 'semantic-ui-react';
import { axios_secure as axios } from '../services/AxiosEncrypted';

//The main page after a user logs in
class ScheduleBuilderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken : props.location.authToken,
      visible: false,
      allClasses:[],
      currentClasses:[],
      semesters:[],
      courseRecord:[],
      scheduleComponentsIndex: 0,
    };
    this.panes = [];
    this.scheduleYearComponents = {};
    this.pickedSchedule = {};
    this.years = {};
    this.handleHamburgerButton = this.handleHamburgerButton.bind(this);
    this.handleDimmedPusher = this.handleDimmedPusher.bind(this);
    this.listItemClicked = this.listItemClicked.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.arrayItemsContainsItem = this.arrayItemsContainsItem.bind(this);
    this.regenerateSchedule = this.regenerateSchedule.bind(this);
    this.paneRender = this.paneRender.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.changePickedSchedule = this.changePickedSchedule.bind(this);
    this.formatRecordAndCourseSequence = this.formatRecordAndCourseSequence.bind(this);
  }

  handleHamburgerButton(){
    this.setState((state) => {
      return {visible: !this.state.visible};
    });
  }

  handleDimmedPusher(){
    if(this.state.visible){
      this.setState((state) => {
        return {visible: !this.state.visible};
      });
    }
  }

  componentDidMount() {
  }

  componentWillMount(){
    if (window.sessionStorage.getItem('isLoggedInAsGuest') === "false") { // If logged in
      axios.post('/users/loadRecAndSeq', {authToken: this.state.authToken})
      .then(res => {
        if (res.data === null || res.data.courseSequence === undefined) // If the user has no saved course record/sequence, it should be blank.
        {
          this.setState({
            currentClasses: [],
            courseRecord: [],
            semesters: []
          })
        }
        else
        {
          this.setState({
            currentClasses: res.data.courseSequence,
            courseRecord: res.data.courseRecord,
            semesters: res.data.semesters
          })
        }
        this.performInitialGenSchedule();
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.performInitialGenSchedule();
    }

  }
  performInitialGenSchedule() {
    const courseSequenceSessionStorage = ((JSON.parse(window.sessionStorage.getItem('courseSequence')) == null) ? [] : JSON.parse(window.sessionStorage.getItem('courseSequence')));
    const courseRecordSessionStorage = ((JSON.parse(window.sessionStorage.getItem('courseRecord')) == null) ? [] : JSON.parse(window.sessionStorage.getItem('courseRecord')));
    const semestersSessionStorage = ((JSON.parse(window.sessionStorage.getItem('semesters')) == null) ? [] : JSON.parse(window.sessionStorage.getItem('semesters')));
    const courseOptionsSessionStorage = ((JSON.parse(window.sessionStorage.getItem('courseOptions')) == null) ? [] : JSON.parse(window.sessionStorage.getItem('courseOptions')));
    this.setState({
      currentClasses: courseSequenceSessionStorage,
      courseRecord: courseRecordSessionStorage,
      semesters: semestersSessionStorage,
      allClasses: courseOptionsSessionStorage
    }, () => {
        let coursesPayload = this.formatRecordAndCourseSequence();
        if (this.props.location.recSeqSem !== undefined) {
          coursesPayload = this.props.location.recSeqSem;
        }
        axios.post('/builder/genSchedules', coursesPayload)
        .then(response => {
          this.props.location.scheduleGiven = response.data;
          this.props.location.scheduleGiven.forEach(element => {
            var year = element.year;
            var season = element.season;
            if(this.years[year] === undefined)  this.years[year] = {};
            this.years[year][season] = element.schedules;
          });
          for(var yearKey in this.years){
            this.scheduleYearComponents[yearKey] = {};
            for(var seasonKey in this.years[yearKey]){
              this.changePickedSchedule(1, yearKey, seasonKey);
            }
            this.panes.push({
              menuItem: yearKey,
              render: (props) => this.paneRender(props)
            });
          }
          this.forceUpdate();
      })
    });
  }

  changePickedSchedule(picked, yearKey, seasonKey){
    if(this.pickedSchedule[yearKey] === undefined){
      this.pickedSchedule[yearKey] = {};
    }
    this.pickedSchedule[yearKey][seasonKey] = picked;
    this.scheduleYearComponents[yearKey][seasonKey]=(<Schedule key={seasonKey+yearKey} season={seasonKey} year={yearKey} schedules={this.years[yearKey][seasonKey]} onPickedScheduleChanged={this.changePickedSchedule} picked={this.pickedSchedule[yearKey][seasonKey]}/>);
  }

  formatRecordAndCourseSequence(){
    var recordArray = [];
    var courseSequenceArray = [];
    var recordItems = this.state.courseRecord;
    var courseItems = this.state.currentClasses;
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

  listItemClicked(event){
    var temp = this.state.currentClasses.filter(function(ele){
      return ele !== event;
    });
    window.sessionStorage.setItem('courseSequence', JSON.stringify(temp));
    this.setState({currentClasses: temp}, ()=>{
      this.regenerateSchedule();
    });
  }

  handleDropdownChange(event, data){
    const itemText = data.value;
    var itemKey = "";
    for (var i in data.options){
      if(data.options[i].text === itemText){
        itemKey = data.options[i].key;
      }
    }
    const currentItem = { text: itemText, key: itemKey };

    if(currentItem.text !== "" && !this.arrayItemsContainsItem(this.state.currentClasses, currentItem)){
      const items = [...this.state.currentClasses, currentItem];
      window.sessionStorage.setItem('courseSequence', JSON.stringify(items));
      this.setState({
        currentClasses: items
      }, ()=>{
        this.regenerateSchedule();
      });
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

  regenerateSchedule(){
    let coursesPayload = {
      "courseRecord": this.state.courseRecord,
      "courseSequence": this.state.currentClasses,
      "semesters": this.state.semesters
    };

    axios.post('/builder/genSchedules', coursesPayload).then(response => {
      console.log("Received: ");
      console.log(response.data);
    })
    .catch(error => {
      console.log('error', error)
    });

    if(!this.props.location.isLoggedInAsGuest)
    {
      let postBody = coursesPayload;
      postBody.authToken = this.state.authToken;

      // When coursePayload has properly been saved in the database, we can update the sessions storage
      axios.post('/users/saveRecAndSeq', postBody).then(res => {
        window.sessionStorage.setItem('courseSequence', JSON.stringify(this.state.courseItems));
        window.sessionStorage.setItem('courseRecord', JSON.stringify(coursesPayload.courseRecord));
        window.sessionStorage.setItem('semesters', JSON.stringify(coursesPayload.semesters));
        window.sessionStorage.setItem('courseOptions', JSON.stringify(this.state.allClasses)); // TODO: need to update it
      });
    }
  }

    paneRender(props){
    var yearKey = props.panes[this.state.scheduleComponentsIndex].menuItem;
    return (<Tab.Pane><TabContent scheduleComponents={this.scheduleYearComponents[yearKey]} year={yearKey} scheduleGiven={this.props.scheduleGiven}/></Tab.Pane>);
  }

  handleTabChange(e, { activeIndex }){
    this.setState({
      scheduleComponentsIndex: activeIndex
    });
  }

  render() {
    const Children = this.state.currentClasses.map((child) =>
          <List.Item className="child-list-item" key={child.key} onClick={() => this.listItemClicked(child)}><Button className='buttonCourseList'>{child.text}</Button></List.Item>);

    return (
      <div>
      <HeaderPage />
      <Sidebar.Pushable>
      <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      dimmed={'true'}
      onHide={this.handleSidebarHide}
      vertical
      visible={this.state.visible}
      width= 'thin'
      >
      <Menu.Item as='a'>Hamburger</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher  dimmed={this.state.visible} onClick={this.handleDimmedPusher}>
      <Grid id='scheduleGrid' padded>
      <Grid.Row id='scheduleGridRow'>
      <Grid.Column width={16}>
      <Icon id='hamburgerButton' name='bars' size='big' onClick={this.handleHamburgerButton} />
      </Grid.Column>
      </Grid.Row>
      <Grid.Row id='sidebarFullPage'>
      <Grid.Column width={4} id='courseListColumn'>
      <Dropdown
      placeholder = 'Search Course'
      search
      selection
      options = {this.state.allClasses}
      onChange={this.handleDropdownChange}
      id='dropdownCourses'
      />
      <div id='coursesTaking'>
      <List divided relaxed>
      {Children}
      </List>
      </div>
      </Grid.Column>
      <Grid.Column width={12}>
      <Tab panes={this.panes} onTabChange={this.handleTabChange}/>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </Sidebar.Pusher>
      </Sidebar.Pushable>


      </div>
      );
    }
  }

export default ScheduleBuilderPage;
