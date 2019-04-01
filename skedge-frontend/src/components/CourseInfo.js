import React, { Component } from 'react';
import './CourseInfo.css'

class CourseInfo extends Component {
  constructor(props){
    super(props);
    this.convertDay = this.convertDay.bind(this);
    this.convertStartTime = this.convertStartTime.bind(this);
    this.convertEndTime = this.convertEndTime.bind(this);
  }
  
  convertDay(day){
    if (day==='M') return("monday");
    else if (day === 'Tu') return("tuesday");
    else if (day === 'W') return("wednesday");
    else if (day === 'Th') return("thursday");
    else if (day === 'F') return("friday");
    else return null;
  }

  convertStartTime(start_time){
    if (start_time === "8:00") return ("eightOclock");
    else if (start_time === "8:30") return("eightThirty");
    else if (start_time === "9:00") return("nineOclock");
    else if (start_time === "9:30") return("nineThirty");
    else if (start_time === "10:00") return("tenOclock");
    else if (start_time === "10:30") return("tenThirty");
    else if (start_time === "11:00") return("elevenOclock");
    else if (start_time === "11:30") return("elevenThirty");
    else if (start_time === "12:00") return("twelveOclock");
    else if (start_time === "12:30") return("twelveThirty");
    else if (start_time === "1:00") return("oneOclock");
    else if (start_time === "1:30") return("oneThirty");
    else if (start_time === "2:00") return("twoOclock");
    else if (start_time === "2:30") return("twoThirty");
    else if (start_time === "3:00") return("threeOclock");
    else if (start_time === "3:30") return("threeThirty");
    else if (start_time === "4:00") return("fourOclock");
    else if (start_time === "4:30") return("fourThirty");
    else if (start_time === "5:00") return("fiveOclock");
    else if (start_time === "5:30") return("fiveThirty");
    else if (start_time === "6:00") return("sixOclock");
    else return null;
  }

  convertEndTime(end_time){
    if (end_time === "8:20AM") return("endEightThirty");
    else if (end_time === "08:50AM") return("endNineOclock");
    else if (end_time === "09:20AM") return("endNineThirty");
    else if (end_time === "09:50AM") return("endTenOclock");
    else if (end_time === "10:20AM") return("endTenThirty");
    else if (end_time === "10:50AM") return("endElevenOclock");
    else if (end_time === "11:20AM") return("endElevenThirty");
    else if (end_time === "11:50AM") return("endTwelveOclock");
    else if (end_time === "12:20PM") return("endTwelveThirty");
    else if (end_time === "12:50PM") return("endOneOclock");
    else if (end_time === "01:20PM") return("endOneThirty");
    else if (end_time === "01:50PM") return("endTwoOclock");
    else if (end_time === "02:20PM") return("endTwoThirty");
    else if (end_time === "02:50PM") return("endThreeOclock");
    else if (end_time === "03:20PM") return("endThreeThirty");
    else if (end_time === "03:50PM") return("endFourOclock");
    else if (end_time === "04:20PM") return("endFourThirty");
    else if (end_time === "04:50PM") return("endFiveOclock");
    else if (end_time === "05:20PM") return("endFiveThirty");
    else if (end_time === "05:50PM") return("endSixOclock");
  }

  render(){
    return(
      <p
        className={`tableElement ${this.convertDay(this.props.day)}
        ${this.convertStartTime(this.props.startTime)} 
        ${this.convertEndTime(this.props.endTime)}`}
      >
      {this.props.course}<br/> 
      {this.props.startTime}  {this.props.endTime} <br/>
      {this.props.type} <br/>
    </p>
    );
  }
}

export default CourseInfo;