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
    if (start_time>="08:00"&&start_time<"08:30") return ("eightOclock");
    else if (start_time>="08:30"&&start_time<"09:00") return ("eightThirty");
    else if (start_time>="09:00"&&start_time<"09:30") return("nineOclock");
    else if (start_time>="09:30"&&start_time<"10:00") return ("nineThirty");
    else if (start_time>="10:00"&&start_time<"10:30") return("tenOclock");
    else if (start_time>="10:30"&&start_time<"11:00") return ("tenThirty");
    else if (start_time>="11:00"&&start_time<"11:30") return("elevenOclock");
    else if (start_time>="11:30"&&start_time<"12:00") return ("elevenThirty");
    else if (start_time>="12:00"&&start_time<"12:30") return("twelveOclock");
    else if (start_time>="12:30"&&start_time<"13:00") return ("twelveThirty");
    else if (start_time>="13:00"&&start_time<"13:30") return("oneOclock");
    else if (start_time>="13:30"&&start_time<"14:00") return ("oneThirty");
    else if (start_time>="14:00"&&start_time<"14:30") return("twoOclock");
    else if (start_time>="14:30"&&start_time<"15:00") return ("twoThirty");
    else if (start_time>="15:00"&&start_time<"15:30") return("threeOclock");
    else if (start_time>="15:30"&&start_time<"16:00") return ("threeThirty");
    else if (start_time>="16:00"&&start_time<"16:30") return("fourOclock");
    else if (start_time>="16:30"&&start_time<"17:00") return ("fourThirty");
    else if (start_time>="17:00"&&start_time<"17:30") return("fiveOclock");
    else if (start_time>="17:30"&&start_time<"18:00") return ("fiveThirty");
    else if (start_time>="18:00"&&start_time<"18:30") return("sixOclock");
    else if (start_time>="18:30"&&start_time<"19:00") return ("sixThirty");
    else if (start_time>="19:00"&&start_time<"19:30") return("sevenOclock");
    else if (start_time>="19:30"&&start_time<"20:00") return ("sevenThirty");
    else if (start_time>="20:00"&&start_time<"20:30") return ("eightOclockPM");
    else if (start_time>="20:30"&&start_time<"21:00") return ("eightThirtyPM");
    else if (start_time>="21:00"&&start_time<"21:30") return ("nineOclockPM");
    else if (start_time>="21:30"&&start_time<"22:00") return ("nineThirtyPM");
    else return null;
  }

  convertEndTime(endTime){
    if (endTime>="09:30"&&endTime<"10:00") return ("endNineThirty");
    else if (endTime>="10:00"&&endTime<"10:30") return("endTenOclock");
    else if (endTime>="10:30"&&endTime<"11:00") return ("endtenThirty");
    else if (endTime>="11:00"&&endTime<"11:30") return("endElevenOclock");
    else if (endTime>="11:30"&&endTime<"12:00") return ("endelevenThirty");
    else if (endTime>="12:00"&&endTime<"12:30") return("endTwelveOclock");
    else if (endTime>="12:30"&&endTime<"13:00") return ("endtwelveThirty");
    else if (endTime>="13:00"&&endTime<"13:30") return("endOneOclock");
    else if (endTime>="13:30"&&endTime<"14:00") return ("endoneThirty");
    else if (endTime>="14:00"&&endTime<"14:30") return("endTwoOclock");
    else if (endTime>="14:30"&&endTime<"15:00") return ("endtwoThirty");
    else if (endTime>="15:00"&&endTime<"15:30") return("endThreeOclock");
    else if (endTime>="15:30"&&endTime<"16:00") return ("endthreeThirty");
    else if (endTime>="16:00"&&endTime<"16:30") return("endFourOclock");
    else if (endTime>="16:30"&&endTime<"17:00") return ("endfourThirty");
    else if (endTime>="17:00"&&endTime<"17:30") return("endFiveOclock");
    else if (endTime>="17:30"&&endTime<"18:00") return ("endfiveThirty");
    else if (endTime>="18:00"&&endTime<"18:30") return("endSixOclock");
    else if (endTime>="18:30"&&endTime<"19:00") return ("endsixThirty");
    else if (endTime>="19:00"&&endTime<"19:30") return("endSevenOclock");
    else if (endTime>="19:30"&&endTime<"20:00") return ("endsevenThirty");
    else if (endTime>="20:00"&&endTime<"20:30") return ("endEightOclockPM");
    else if (endTime>="20:30"&&endTime<"21:00") return ("endeightThirtyPM");
    else if (endTime>="21:00"&&endTime<"21:30") return ("endNineOclockPM");
    else if (endTime>="21:30"&&endTime<"22:00") return ("endnineThirtyPM");
    else if (endTime>="22:00"&&endTime<"22:30") return ("endTenOclockPM");
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
