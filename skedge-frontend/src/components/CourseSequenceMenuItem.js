import React, { Component } from "react";
import '../styles/CourseSequenceMenuItem.css';
import { Button, Menu, Icon } from 'semantic-ui-react';


class CourseSequenceMenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Menu.Item as='a'>
        <div className="MenuItem">
          <div><p className="VerticalCenter">{this.props.name}</p></div>
          <div>
            <Button size='mini' icon>
              <Icon name='save' />
            </Button>
            <Button size='mini' icon>
              <Icon name='delete calendar'/>
            </Button>
          </div>
        </div>
      </Menu.Item>);
  }
}

export default CourseSequenceMenuItem