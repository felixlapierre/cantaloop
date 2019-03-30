import React, { Component } from 'react';
import '../styles/Schedule.css';
import { Grid, Header, Button, Segment } from 'semantic-ui-react';
import WeeklySchedule from './WeeklySchedule';

//The actuall visual schedule, where all the classes will be shown.
class Schedule extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state= {
      pickedSchedule: 1
    };
    this.handleNextSchedule = this.handleNextSchedule.bind(this);
    this.handlePreviousSchedule = this.handlePreviousSchedule.bind(this);
  }

  handleNextSchedule(){
    if(this.state.pickedSchedule < 3){
      this.setState({
        pickedSchedule: this.state.pickedSchedule + 1,
      });
    }
  }

  handlePreviousSchedule(){
    if(this.state.pickedSchedule > 1){
      this.setState({
        pickedSchedule: this.state.pickedSchedule - 1,
      });
=======
    this.desc = ""
    for(var key in this.props.schedules){
      this.desc += this.props.schedules[key] +", ";
>>>>>>> fc1d9e23b568f53f1bcaf1a1a2a7d1c2f83e6299
    }
  }

  render() {
    return (
<<<<<<< HEAD
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column width = {5} textAlign="center">
            <Header as="h2" textAlign="center">Schedule for {this.props.season.charAt(0).toUpperCase()}{this.props.season.substring(1, this.props.season.length)}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width = {1} textAlign="center">
            <Button onClick={this.handlePreviousSchedule} icon='arrow left'/>
          </Grid.Column>
          <Grid.Column width = {2} textAlign="center">
            <Header as="h3">{this.state.pickedSchedule} out of {this.props.schedules.length}</Header>
          </Grid.Column>
          <Grid.Column width = {1} textAlign="center">
            <Button onClick={this.handleNextSchedule} icon='arrow right'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <Segment raised>
              {/* The weekly scheudle should be in this segment */}
              {/* example on how to access the classes for the schedule */}
              <WeeklySchedule schedule={this.props.schedules[this.state.pickedSchedule-1]}/>
              {JSON.stringify(this.props.schedules[this.state.pickedSchedule-1])} 
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
=======
      <div>
        {this.props.season}
      </div>
>>>>>>> fc1d9e23b568f53f1bcaf1a1a2a7d1c2f83e6299
    );
  }
}

export default Schedule;
