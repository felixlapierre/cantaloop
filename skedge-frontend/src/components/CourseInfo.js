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
<<<<<<< HEAD
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
=======
    if (parseFloat(start_time,10)>=8&&parseFloat(start_time,10)<8.3) return ("eightOclock");
    else if (parseFloat(start_time,10)>=8.3&&parseFloat(start_time,10)<9) return ("eightThirty");
    else if (parseFloat(start_time,10)>=9&&parseFloat(start_time,10)<9.3) return("nineOclock");
    else if (parseFloat(start_time,10)>=9.3&&parseFloat(start_time,10)<10) return ("nineThirty");
    else if (parseFloat(start_time,10)>=10&&parseFloat(start_time,10)<10.3) return("tenOclock");
    else if (parseFloat(start_time,10)>=10.3&&parseFloat(start_time,10)<11) return ("tenThirty");
    else if (parseFloat(start_time,10)>=11&&parseFloat(start_time,10)<11.3) return("elevenOclock");
    else if (parseFloat(start_time,10)>=11.3&&parseFloat(start_time,10)<12) return ("elevenThirty");
    else if (parseFloat(start_time,10)>=12&&parseFloat(start_time,10)<12.3) return("twelveOclock");
    else if (parseFloat(start_time,10)>=12.3&&parseFloat(start_time,10)<13) return ("twelveThirty");
    else if (parseFloat(start_time,10)>=13&&parseFloat(start_time,10)<13.3) return("oneOclock");
    else if (parseFloat(start_time,10)>=13.3&&parseFloat(start_time,10)<14) return ("oneThirty");
    else if (parseFloat(start_time,10)>=14&&parseFloat(start_time,10)<14.3) return("twoOclock");
    else if (parseFloat(start_time,10)>=14.3&&parseFloat(start_time,10)<15) return ("twoThirty");
    else if (parseFloat(start_time,10)>=15&&parseFloat(start_time,10)<15.3) return("threeOclock");
    else if (parseFloat(start_time,10)>=15.3&&parseFloat(start_time,10)<16) return ("threeThirty");
    else if (parseFloat(start_time,10)>=16&&parseFloat(start_time,10)<16.3) return("fourOclock");
    else if (parseFloat(start_time,10)>=16.3&&parseFloat(start_time,10)<17) return ("fourThirty");
    else if (parseFloat(start_time,10)>=17&&parseFloat(start_time,10)<17.3) return("fiveOclock");
    else if (parseFloat(start_time,10)>=17.3&&parseFloat(start_time,10)<18) return ("fiveThirty");
    else if (parseFloat(start_time,10)>=18&&parseFloat(start_time,10)<18.3) return("sixOclock");
    else if (parseFloat(start_time,10)>=18.3&&parseFloat(start_time,10)<19) return ("sixThirty");
    else if (parseFloat(start_time,10)>=19&&parseFloat(start_time,10)<19.3) return("sevenOclock");
    else if (parseFloat(start_time,10)>=19.3&&parseFloat(start_time,10)<20) return ("sevenThirty");
    else if (parseFloat(start_time,10)>=20&&parseFloat(start_time,10)<20.3) return ("eightOclockPM");
    else if (parseFloat(start_time,10)>=20.3&&parseFloat(start_time,10)<21) return ("eightThirtyPM");
    else if (parseFloat(start_time,10)>=21&&parseFloat(start_time,10)<21.3) return ("nineOclockPM");
    else if (parseFloat(start_time,10)>=21.3&&parseFloat(start_time,10)<22) return ("nineThirtyPM");
>>>>>>> 0c15ac2b1dd4d1c8f88d0147c50fb3e14118ea51
    else return null;
  }

  convertEndTime(endTime){
<<<<<<< HEAD
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
=======
    if (parseFloat(endTime,10)>=9.3&&parseFloat(endTime,10)<10) return ("endNineThirty");
    else if (parseFloat(endTime,10)>=10&&parseFloat(endTime,10)<10.3) return("endTenOclock");
    else if (parseFloat(endTime,10)>=10.3&&parseFloat(endTime,10)<11) return ("endtenThirty");
    else if (parseFloat(endTime,10)>=11&&parseFloat(endTime,10)<11.3) return("endElevenOclock");
    else if (parseFloat(endTime,10)>=11.3&&parseFloat(endTime,10)<12) return ("endelevenThirty");
    else if (parseFloat(endTime,10)>=12&&parseFloat(endTime,10)<12.3) return("endTwelveOclock");
    else if (parseFloat(endTime,10)>=12.3&&parseFloat(endTime,10)<13) return ("endtwelveThirty");
    else if (parseFloat(endTime,10)>=13&&parseFloat(endTime,10)<13.3) return("endOneOclock");
    else if (parseFloat(endTime,10)>=13.3&&parseFloat(endTime,10)<14) return ("endoneThirty");
    else if (parseFloat(endTime,10)>=14&&parseFloat(endTime,10)<14.3) return("endTwoOclock");
    else if (parseFloat(endTime,10)>=14.3&&parseFloat(endTime,10)<15) return ("endtwoThirty");
    else if (parseFloat(endTime,10)>=15&&parseFloat(endTime,10)<15.3) return("endThreeOclock");
    else if (parseFloat(endTime,10)>=15.3&&parseFloat(endTime,10)<16) return ("endthreeThirty");
    else if (parseFloat(endTime,10)>=16&&parseFloat(endTime,10)<16.3) return("endFourOclock");
    else if (parseFloat(endTime,10)>=16.3&&parseFloat(endTime,10)<17) return ("endfourThirty");
    else if (parseFloat(endTime,10)>=17&&parseFloat(endTime,10)<17.3) return("endFiveOclock");
    else if (parseFloat(endTime,10)>=17.3&&parseFloat(endTime,10)<18) return ("endfiveThirty");
    else if (parseFloat(endTime,10)>=18&&parseFloat(endTime,10)<18.3) return("endSixOclock");
    else if (parseFloat(endTime,10)>=18.3&&parseFloat(endTime,10)<19) return ("endsixThirty");
    else if (parseFloat(endTime,10)>=19&&parseFloat(endTime,10)<19.3) return("endSevenOclock");
    else if (parseFloat(endTime,10)>=19.3&&parseFloat(endTime,10)<20) return ("endsevenThirty");
    else if (parseFloat(endTime,10)>=20&&parseFloat(endTime,10)<20.3) return ("endEightOclockPM");
    else if (parseFloat(endTime,10)>=20.3&&parseFloat(endTime,10)<21) return ("endeightThirtyPM");
    else if (parseFloat(endTime,10)>=21&&parseFloat(endTime,10)<21.3) return ("endNineOclockPM");
    else if (parseFloat(endTime,10)>=21.3&&parseFloat(endTime,10)<22) return ("endnineThirtyPM");
    else if (parseFloat(endTime,10)>=22&&parseFloat(endTime,10)<22.3) return ("endTenOclockPM");
>>>>>>> 0c15ac2b1dd4d1c8f88d0147c50fb3e14118ea51
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
