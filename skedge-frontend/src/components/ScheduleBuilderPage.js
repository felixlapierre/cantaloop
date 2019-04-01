import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import Schedule from './Schedule.js';
import HeaderPage from './HeaderPage.js';
import Schedule from './Schedule.js';
import TabContent from './TabContent.js';
import { Icon, Menu, Dropdown, List, Grid, Segment, Sidebar, Tab} from 'semantic-ui-react';
import axios from "axios";

//The main page after a user logs in
class ScheduleBuilderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {visible: false,
                  currentClasses:[]
                  };
    this.panes = [];
    this.scheduleComponents = [];
    this.handleHamburgerButton = this.handleHamburgerButton.bind(this);
    this.listItemClicked = this.listItemClicked.bind(this);
  }

  handleHamburgerButton(){
      this.setState((state) => {
        return {visible: !this.state.visible};
      });
  }


  componentWillMount(){
    this.setState({currentClasses: JSON.parse(window.sessionStorage.getItem('courseSequence'))});

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
    console.log("panes: "+this.panes)
  }

  listItemClicked(event){
    console.log(event);
    var temp = this.state.currentClasses.filter(function(ele){
             return ele !== event;
    });
    this.setState({currentClasses: temp});
    axios.post('/genSchedules', this.state.currentClasses).then(response => {
      console.log("Received: ");
      console.log(response.data);
    });
  }

  paneRender(){
    return (<Tab.Pane><TabContent scheduleComponents={this.scheduleComponents} scheduleGiven={this.props.scheduleGiven}/></Tab.Pane>)
  }

  render() {
    const Children = this.state.currentClasses.map((child) =>
          <List.Item className="child-list-item" key={child.key} onClick={() => this.listItemClicked(child)}>{child.text}</List.Item>);


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

          <Sidebar.Pusher  dimmed={this.state.visible} onClick={this.handleHamburgerButton}>
            <Grid id='scheduleGrid' padded>
              <Grid.Row id='scheduleGridRow'>
                <Grid.Column width={16}>
                <Icon id='hamburgerButton' name='bars' size='big' onClick={this.handleHamburgerButton} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row id='sidebarFullPage'>
                <Grid.Column width={4}>
                  <Dropdown
                      placeholder = 'Search Course'
                      fluid
                      search
                      selection
                      options = {this.state.currentClasses}
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
            <Sidebar.Pusher>
              <Segment basic>
                <Tab panes={this.panes} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default ScheduleBuilderPage;
