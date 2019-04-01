import React from 'react';
import './CourseInfo.css'

const CourseInfo = (props) => {

  const convertDay = (day) => {
    if (day === 'M') return("monday");
    else if (day === 'Tu') return("tuesday");
    else if (day === 'W') return("wednesday");
    else if (day === 'Th') return("thursday");
    else if (day === 'F') return("friday");
    else return null;
  }

  const convertStartTime = (start_time) => {
    if (start_time === "08:30AM") return("eightThirty");
    else if (start_time === "09:00AM") return("nineOclock");
    else if (start_time === "09:30AM") return("nineThirty");
    else if (start_time === "10:00AM") return("tenOclock");
    else if (start_time === "10:30AM") return("tenThirty");
    else if (start_time === "11:00AM") return("elevenOclock");
    else if (start_time === "11:30AM") return("elevenThirty");
    else if (start_time === "12:00PM") return("twelveOclock");
    else if (start_time === "12:30PM") return("twelveThirty");
    else if (start_time === "01:00PM") return("oneOclock");
    else if (start_time === "01:30PM") return("oneThirty");
    else if (start_time === "02:00PM") return("twoOclock");
    else if (start_time === "02:30PM") return("twoThirty");
    else if (start_time === "03:00PM") return("threeOclock");
    else if (start_time === "03:30PM") return("threeThirty");
    else if (start_time === "04:00PM") return("fourOclock");
    else if (start_time === "04:30PM") return("fourThirty");
    else if (start_time === "05:00PM") return("fiveOclock");
    else if (start_time === "05:30PM") return("fiveThirty");
    else if (start_time === "06:00PM") return("sixOclock");
    else return null;
  } 

  const convertEndTime = (end_time) => {
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
      return (
            <p
              className={`tableElement ${convertDay(props.day)}
              ${convertStartTime(props.startTime)} 
              ${convertEndTime(props.endTime)}`}
            >
              {props.course}<br/> 
              {props.startTime} to {props.endTime} <br/>
              {props.type} <br/>
            </p>
          )
    }


export default CourseInfo;