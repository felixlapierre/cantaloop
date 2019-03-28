import React, { Component } from 'react';
import '../styles/Schedule.css';
import WeeklySchedule from './WeeklySchedule';

//The actuall visual schedule, where all the classes will be shown.
class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WeeklySchedule/>
    );
  }
}

export default Schedule;
