import React, { Component } from 'react';
import '../styles/Schedule.css';
import { Grid, Header, Button, Segment } from 'semantic-ui-react';

//The actuall visual schedule, where all the classes will be shown.
class Schedule extends Component {
  constructor(props) {
    super(props);
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
    }
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column width = {5} textAlign="center">
            <Header as="h2" textAlign="center">Shedule for {this.props.season.charAt(0).toUpperCase()}{this.props.season.substring(1, this.props.season.length)}</Header>
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
              {JSON.stringify(this.props.schedules[this.state.pickedSchedule-1])} 
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Schedule;
