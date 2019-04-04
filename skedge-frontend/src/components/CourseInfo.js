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
      if (day.length==2)
      {
           if (day==='Mo') return("monday");
           else if (day === 'Tu') return("tuesday");
           else if (day === 'We') return("wednesday");
           else if (day === 'Th') return("thursday");
           else if (day === 'Fr') return("friday");
           else return null;
      }
      if (day.length==4)
      {
          var firstDay=day.substring(0,1)
          if (firstDay==='Mo') return("monday");
            else if (firstDay === 'Tu') return("tuesday");
           else if (firstDay === 'We') return("wednesday");
           else if (firstDay === 'Th') return("thursday");
           else if (firstDay === 'Fr') return("friday");
           else return null;
      }
   
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

  convertEndTime(endTime){
    if (endTime === "9:00AM") return("endNineOclock");
    else if (endTime === "9:30AM") return("endNineThirty");
    else if (endTime === "10:00AM") return("endTenOclock");
    else if (endTime === "10:30AM") return("endTenThirty");
    else if (endTime === "11:00AM") return("endElevenOclock");
    else if (endTime === "11:30AM") return("endElevenThirty");
    else if (endTime === "12:00AM") return("endTwelveOclock");
    else if (endTime === "12:30PM") return("endTwelveThirty");
    else if (endTime === "1:00PM") return("endOneOclock");
    else if (endTime === "1:30PM") return("endOneThirty");
    else if (endTime === "2:00PM") return("endTwoOclock");
    else if (endTime === "2:30PM") return("endTwoThirty");
    else if (endTime === "3:00PM") return("endThreeOclock");
    else if (endTime === "3:30PM") return("endThreeThirty");
    else if (endTime === "4:00PM") return("endFourOclock");
    else if (endTime === "4:30PM") return("endFourThirty");
    else if (endTime === "5:00PM") return("endFiveOclock");
    else if (endTime === "5:30PM") return("endFiveThirty");
    else if (endTime === "6:00PM") return("endSixOclock");
  }

  render(){
    return(
      <p
        className={`tableElement ${this.convertDay(this.props.day)}
        ${this.convertStartTime(this.props.startTime)} 
        ${this.convertEndTime(this.props.endTime)}`}
      >
      {this.props.course}<br/> 
      {this.props.startTime} - {this.props.endTime} <br/>
      {this.props.type} <br/>
    </p>
    );
  }
}

export default CourseInfo;