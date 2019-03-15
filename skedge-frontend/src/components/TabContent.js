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
                  <h6> 8:30 AM </h6> 
              </Grid.Row>
              <Grid.Row className="meow"> 
              <h6> 9:00 AM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 9:30 AM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 10:00 AM</h6>         
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 10:30 AM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 11:30 AM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 12:00 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 12:30 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 1:00 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 1:30 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 2:00 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 2:30 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 3:00 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 3:30 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 3:30 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 4:00 PM</h6>             
               </Grid.Row>
               <Grid.Row className="meow"> 
              <h6> 4:30 PM</h6>                     <h6> COMP 346  <br/> Section S </h6> 
        
               </Grid.Row>

            </Grid.Column>
            <Grid.Column>
                <h4> Monday </h4> 
                <Grid.Row className="meow"> 
               </Grid.Row>
                <Grid.Row>               
                <h6> COMP 346  <br/> Section S </h6> 
                </Grid.Row>
                <Grid.Row className="meow"> 
                <h6> ENGR 371 <br/> </h6>             
               </Grid.Row>
            </Grid.Column>
            <Grid.Column>
                <h4> Tuesday </h4>
                <h6> COMP 335  <br/> Section U-U </h6> 
            </Grid.Column>
            <Grid.Column>
                <h4> Wednesday </h4>                
                <h6> ENGR 213 <br/> Section C-C </h6>

            </Grid.Column>
            <Grid.Column>
                <h4> Thursday </h4>
                <h6> ENGR 233 <br/> Section DC </h6>

            </Grid.Column>
            <Grid.Column>
                <h4> Friday </h4>
                <h6> SOEN 228 <br/> Section E </h6>

            </Grid.Column>
          </Grid>
          </Header>
        )
    }
}

export default TabContent;
