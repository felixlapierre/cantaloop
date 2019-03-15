import React, { Component } from 'react';
import '../styles/Schedule.css';

//The actuall visual schedule, where all the classes will be shown.
class Schedule extends Component {
  constructor(props) {
    super(props);
    this.desc = ""
    for(var key in this.props.schedules){
      this.desc += this.props.schedules[key] +", ";
    }
  }

  render() {
    return (
      <div>
        {this.props.season}
      </div>
    );
  }
}

export default Schedule;
