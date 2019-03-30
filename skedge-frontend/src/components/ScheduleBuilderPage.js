import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import Schedule from './Schedule';
import HeaderPage from './HeaderPage.js';
<<<<<<< HEAD
import Schedule from './Schedule.js';
=======
>>>>>>> fc1d9e23b568f53f1bcaf1a1a2a7d1c2f83e6299
import TabContent from './TabContent.js';
import { Icon, Menu, Segment, Sidebar, Tab } from 'semantic-ui-react';
import Slider from 'react-slick';


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
<<<<<<< HEAD
=======
    this.panes = [];
>>>>>>> fc1d9e23b568f53f1bcaf1a1a2a7d1c2f83e6299
    var years = {};
    this.props.scheduleGiven.forEach(element => {
      var year = element.year;
      var season = element.season;
      if(years[year] === undefined)
        years[year] = {};
      years[year][season] = element.schedules;
    });
    for(var yearKey in years){
<<<<<<< HEAD
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

  paneRender(){
    return (<Tab.Pane><TabContent scheduleComponents={this.scheduleComponents} scheduleGiven={this.props.scheduleGiven}/></Tab.Pane>)
=======
      var scheduleComponents = [];
      for(var seasonKey in years[yearKey]){
        scheduleComponents.push(<Schedule key={seasonKey} season={seasonKey} schedules={years[yearKey][seasonKey]} />);
      }
      this.panes.push({
        menuItem: yearKey,
        render: () => <TabContent scheduleComponents={scheduleComponents} scheduleGiven={this.props.scheduleGiven}/>
      })
    }
>>>>>>> fc1d9e23b568f53f1bcaf1a1a2a7d1c2f83e6299
  }

  render() {
    return (
      <div>
        <HeaderPage />
        <div>
          <Icon id='hamburgerButton' name='bars' size='big' onClick={this.handleHamburgerButton} />
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={this.state.visible}
            >
              <Menu.Item as='a'>Hamburger</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <Tab panes={this.panes} />
<<<<<<< HEAD
=======
                <br />
                <br />
                <br />
                <br />
                <br />
>>>>>>> fc1d9e23b568f53f1bcaf1a1a2a7d1c2f83e6299
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default ScheduleBuilderPage;
