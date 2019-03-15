import React, { Component } from 'react';
import {Tab, Grid, Container, Header} from 'semantic-ui-react';
import * as ReactDOM from 'react-dom';
import '../styles/TabContent.css';



class TabContent extends Component{
    constructor(props) {
        super(props);
    }
    // Monday()
    // {
    //     var classes=[];
    //     this.props.scheduleComponents.schedules.forEach(element => {
    //     var days = element.days;
    //     if (days.contains("Mo")){
    //         classes.push(days);} }
    //     );
        
    // }
    // Tuesday()
    // {
    //     var classes=[];
    //     this.props.scheduleGiven.forEach(element => {
    //     var days = element.days;
    //     if (days.contains("Tu")){
    //         classes.push(days);} }
    //     );
    // }
    // Wednesday()
    // {

    // }
    // Thursday()
    // {

    // }
    // Friday()
    // {

    // }
    // sort(classes)
    // {
    //     var comparator=0;
    //     classes.forEach(element => {
    //         if (element.lecture.time_starts<0)

    //     })
    // }
    
 
render() {
        return (
         <Header as="h2" textAlign="center">   
         Here's your schedule for {this.props.scheduleComponents[0]}
           <br/>
           <br/>
            <Grid centered columns={6}>                         
             <Grid.Column>
              <h4> Time </h4>
              <Grid.Row className="meow">
                  8:30 AM
              </Grid.Row>
              <Grid.Row className="meow"> 
                  8:45 AM
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
                <h4> Monday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Tuesday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Wednesday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Thursday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Friday </h4>
            </Grid.Column>
          </Grid>
          </Header>
        )
    }
}

export default TabContent;
