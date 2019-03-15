import React, { Component } from 'react';
import {Tab} from 'semantic-ui-react';
import * as ReactDOM from 'react-dom';
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";

class TabContent extends Component{
    constructor(props) {
        super(props);
        this.state = {data: this.props.scheduleComponents};
    }
    
 
render() {
    const { classes } = this.state;
        return (
            // <Tab.Pane>
            //     <h1> Your schedule for {this.props.scheduleComponents[0]}</h1>
            // </Tab.Pane>
              <Scheduler classes={classes}>
                <ViewState currentDate="2018-06-28" />
                <WeekView startDayHour={9} endDayHour={19} />
                <Appointments />
              </Scheduler>
        )
    }
}

export default TabContent;
