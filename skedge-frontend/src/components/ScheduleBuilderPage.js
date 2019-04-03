import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import Schedule from './Schedule';
import HeaderPage from './HeaderPage.js';
import TabContent from './TabContent.js';
import { Button, Icon, Menu, Dropdown, List, Grid, Sidebar, Tab} from 'semantic-ui-react';
import axios from "axios";

//The main page after a user logs in
class ScheduleBuilderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {visible: false,
                  allClasses:[],
                  currentClasses:[],
                  semesters:[],
                  courseRecord:[]
                  };
    this.panes = [];
    this.scheduleComponents = [];
    this.handleHamburgerButton = this.handleHamburgerButton.bind(this);
    this.handleDimmedPusher = this.handleDimmedPusher.bind(this);
    this.listItemClicked = this.listItemClicked.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.arrayItemsContainsItem = this.arrayItemsContainsItem.bind(this);
    this.regenerateSchedule = this.regenerateSchedule.bind(this);
  }

  componentWillUnmount(){
    console.log("-----------");
    console.log(sessionStorage);
    console.log("-----------");
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

  componentWillMount(){
    this.setState({currentClasses: JSON.parse(window.sessionStorage.getItem('courseSequence'))});
    this.setState({courseRecord: JSON.parse(window.sessionStorage.getItem('courseRecord'))});
    this.setState({semesters: JSON.parse(window.sessionStorage.getItem('semesters'))});
    this.setState({allClasses: JSON.parse(window.sessionStorage.getItem('courseOptions'))});

    var years = {};
    this.props.scheduleGiven.forEach(element => {
      var year = element.year;
      var season = element.season;
      if(years[year] === undefined)
        years[year] = {};
      years[year][season] = element.schedules;
    });
    for(var yearKey in years){
      for(var seasonKey in years[yearKey]){
        this.scheduleComponents.push(<Schedule key={seasonKey} season={seasonKey} schedules={years[yearKey][seasonKey]} />);
      }
      this.panes.push({
        menuItem: yearKey,
        render: () => this.paneRender()
      });
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
    let dataToSend = {"courseRecord": this.state.courseRecord,
                      "courseSequence": this.state.currentClasses,
                      "semesters": this.state.semesters};
    axios.post('/builder/genSchedules', dataToSend).then(response => {
      console.log("Received: ");
      console.log(response.data);
    })
    .catch(error => {
      console.log('error', error)
    });
  }

  paneRender(){
    return (<Tab.Pane><TabContent scheduleComponents={this.scheduleComponents} scheduleGiven={this.props.scheduleGiven}/></Tab.Pane>)
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
                  <Tab panes={this.panes} />
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
