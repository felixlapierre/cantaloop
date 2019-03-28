import React, {Component} from 'react';
import { Grid, Header } from 'semantic-ui-react';
// import CourseInfo from './CourseInfo'
class WeeklySchedule extends Component {
    constructor(props){
  super(props);
    }
  

 
    render() {
    return (
    <Grid columns='six' divided>
            <Grid.Row color="purple" id="WeekDays">
            <Grid.Column id="timings"> </Grid.Column>
            <Grid.Column id="Monday"> Monday </Grid.Column>
            <Grid.Column id="Tuesday"> Tuesday </Grid.Column>
            <Grid.Column id="Wednesday"> Wednesday </Grid.Column>
            <Grid.Column id="Thursday"> Thursday </Grid.Column>
            <Grid.Column id="Friday"> Friday </Grid.Column>
            </Grid.Row> 
            <Grid.Row id="8:00"> 8:00 </Grid.Row>
            <Grid.Row id="8:30"> 8:30 </Grid.Row>
            <Grid.Row id="9:00"> 9:00 </Grid.Row>
            <Grid.Row id="9:30"> 9:30 </Grid.Row>
            <Grid.Row id="10:00"> 10:00 </Grid.Row>
            <Grid.Row id="10:30"> 10:30 </Grid.Row>       
    </Grid>
    );
  }
}

export default WeeklySchedule;
