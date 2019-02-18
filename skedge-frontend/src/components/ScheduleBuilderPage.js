import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import HeaderPage from './HeaderPage.js';

//The main page after a user logs in
class ScheduleBuilderPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderPage />
      </div>
    );
  }
}

export default ScheduleBuilderPage;
