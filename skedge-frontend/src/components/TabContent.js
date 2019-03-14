import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import '../styles/TabContent.css';
import { Tab, Button, Grid } from 'semantic-ui-react';
 

class TabContent extends Component{
    constructor(props) {
        super(props);
        this.state = {visible: false};
        this.FleshOutSchedule=this.FleshOutSchedule.bind(this);
    }
   FleshOutSchedule() {
    var season=[];
    this.props.scheduleGiven.forEach(element => {
        season.push(element.season);
    }
    )
    for (var i=0 ;i<season.length;i++)
    {
        return <h1> This is your schedule for {season[i]} </h1>
    }
}

    render() {
        return (
            <Tab.Pane> 
              {this.FleshOutSchedule()}
              <div className="grid">
              <div className="title">
              <div className="time">
              
              </div>
              </div>
              </div>
            </Tab.Pane>
        )
    }
}

export default TabContent;

