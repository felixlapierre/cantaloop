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
           if (day==='Mo') return("monday");
           else if (day === 'Tu') return("tuesday");
           else if (day === 'We') return("wednesday");
           else if (day === 'Th') return("thursday");
           else if (day === 'Fr') return("friday");
           else return null;
   
  }

  convertStartTime(start_time){
    if (parseFloat(start_time,10)>=8&&parseFloat(start_time,10)<9) return ("eightOclock");
    else if (parseFloat(start_time,10)>=9&&parseFloat(start_time,10)<10) return("nineOclock");
    else if (parseFloat(start_time,10)>=10&&parseFloat(start_time,10)<11) return("tenOclock");
    else if (parseFloat(start_time,10)>=11&&parseFloat(start_time,10)<12) return("elevenOclock");
    else if (parseFloat(start_time,10)>=12&&parseFloat(start_time,10)<13) return("twelveOclock");
    else if (parseFloat(start_time,10)>=13&&parseFloat(start_time,10)<14) return("oneOclock");
    else if (parseFloat(start_time,10)>=14&&parseFloat(start_time,10)<15) return("twoOclock");
    else if (parseFloat(start_time,10)>=15&&parseFloat(start_time,10)<16) return("threeOclock");
    else if (parseFloat(start_time,10)>=16&&parseFloat(start_time,10)<17) return("fourOclock");
    else if (parseFloat(start_time,10)>=17&&parseFloat(start_time,10)<18) return("fiveOclock");
    else if (parseFloat(start_time,10)>=18&&parseFloat(start_time,10)<19) return("sixOclock");
    else return null;
  }

  convertEndTime(endTime){
    if (parseFloat(endTime,10)>=9&&parseFloat(endTime,10)<10) return("endNineOclock");
    else if (parseFloat(endTime,10)>=10&&parseFloat(endTime,10)<11) return("endTenOclock");
    else if (parseFloat(endTime,10)>=11&&parseFloat(endTime,10)<12) return("endElevenOclock");
   else if (parseFloat(endTime,10)>=12&&parseFloat(endTime,10)<13) return("endTwelveOclock");
    else if (parseFloat(endTime,10)>=13&&parseFloat(endTime,10)<14) return("endOneOclock");
    else if (parseFloat(endTime,10)>=14&&parseFloat(endTime,10)<15) return("endTwoOclock");
    else if (parseFloat(endTime,10)>=15&&parseFloat(endTime,10)<16) return("endThreeOclock");
    else if (parseFloat(endTime,10)>=16&&parseFloat(endTime,10)<17) return("endFourOclock");
    else if (parseFloat(endTime,10)>=17&&parseFloat(endTime,10)<18) return("endFiveOclock");
    else if (parseFloat(endTime,10)>=18&&parseFloat(endTime,10)<19) return("endSixOclock");
    else return null;
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
