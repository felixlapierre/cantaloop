import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import HeaderPage from './HeaderPage.js';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Tab } from 'semantic-ui-react';

//The main page after a user logs in
class ScheduleBuilderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {visible: false};
    this.handleHamburgerButton = this.handleHamburgerButton.bind(this);
  }

  handleHamburgerButton(){
      this.setState((state) => {
        return {visible: !this.state.visible};
      });
    console.log(this.state.visible);
  }

  render() {
    const panes = [
      { menuItem: 'Semester 1', render: () => <Tab.Pane>Semester 1 Content</Tab.Pane> },
      { menuItem: 'Semester 2', render: () => <Tab.Pane>Semester 2 Content</Tab.Pane>  },
      { menuItem: 'Semester 3', render: () => <Tab.Pane>Semester 3 Content</Tab.Pane>  },
    ];
    return (
      <div>
        <HeaderPage />
        <div>
          <Icon name='bars' size='big' onClick={this.handleHamburgerButton} />
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
                <Tab panes={panes} />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default ScheduleBuilderPage;
