import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import Schedule from './Schedule';
import HeaderPage from './HeaderPage.js';
import TabContent from './TabContent.js';
import CourseItems from './CourseItems.js';
import { Icon, Menu, Grid, Segment, Sidebar, Tab, List } from 'semantic-ui-react';

//The main page after a user logs in
class ScheduleBuilderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {visible: false};
    this.panes = [];
    this.scheduleComponents = [];
    this.handleHamburgerButton = this.handleHamburgerButton.bind(this);
  }

  handleHamburgerButton(){
      this.setState((state) => {
        return {visible: !this.state.visible};
      });
    console.log(this.state.visible);
  }

  componentWillMount(){
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

  paneRender(){
    return (<Tab.Pane><TabContent scheduleComponents={this.scheduleComponents} scheduleGiven={this.props.scheduleGiven}/></Tab.Pane>)
  }

  render() {
    return (
      <div>
        <HeaderPage />
        <Grid id='scheduleGrid'>
          <Grid.Row id='scheduleGridRow'>
            <Grid.Column width={16}>
            <Icon id='hamburgerButton' name='bars' size='big' onClick={this.handleHamburgerButton} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id='sidebarFullPage'>
            <Grid.Column width={4}>
              <Sidebar.Pushable as={Segment}>
                <Sidebar
                  as={Menu}
                  animation='overlay'
                  icon='labeled'
                  inverted
                  dimmed={'true'}
                  onHide={this.handleSidebarHide}
                  vertical
                  visible={this.state.visible}
                >
                  <Menu.Item as='a'>Hamburger</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                  <List id='courseListOfSequence'>
                   <List.Item>Apples</List.Item>
                   <List.Item>Pears</List.Item>
                   <List.Item>Oranges</List.Item>
                  </List>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </Grid.Column>
            <Grid.Column width={12}>
              <Tab panes={this.panes} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ScheduleBuilderPage;
