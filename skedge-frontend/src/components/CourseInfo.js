import React from 'react';

const CourseInfo = (props) => {

  const convertDay = (day) => {
    if (day.length==4)   //Needs work
    {
        if (day.contains('Mo')) return("monday");
        else if (day.contains('Tu')) return("tuesday");
        else if (day.contains('We')) return("wednesday");
        else if (day.contains('Th')) return("thursday");
        else if (day.contains('Fr')) return("friday");
    }
    if (day.length==2)
    {
        if (day.contains('Mo')) return("monday");
        else if (day.contains('Tu')) return("tuesday");
        else if (day.contains('We')) return("wednesday");
        else if (day.contains('Th')) return("thursday");
        else if (day.contains('Fr')) return("friday");
    }
    else return null;
  }

  const convertStartTime = (time_start) => {
    if ((time_start === "8:00") ||(time_start === "8:15")) return("Eight");
    else if ((time_start === "8:30")||(time_start === "8:45")) return("EightThirty");
    //return ("EightFortyFive");
    else if ((time_start === "9:00")||(time_start === "9:15")) return("Nine");
    //return ("NineFifteen");
    else if ((time_start === "9:30")||(time_start === "9:45")) return("NineThirty");
    //return ("NineFortyFive");
    else if ((time_start === "10:00")||(time_start === "10:15") ) return("Ten");
    //return ("TenFifteen");
    else if ((time_start === "10:30")||(time_start === "10:45")  ) return("TenThirty");
    //return ("TenFortyFive");
    else if ((time_start === "11:00")||(time_start === "11:15") ) return("Eleven");
    //return ("ElevenFifteen");
    else if ((time_start === "11:30")||(time_start === "11:45")) return("ElevenThirty");
    // return ("ElevenFortyFive");
    else if ((time_start === "12:00")||(time_start === "12:15")) return("Twelve");
    //return ("TwelveFifteen");
    else if ((time_start === "12:30")||(time_start === "12:45")) return("TwelveThirty");
    //return ("TwelveFortyFive");
    else if ((time_start === "1:00")||(time_start === "1:15")) return("One");
    //return ("OneFifteen");
    else if ((time_start === "1:30")||(time_start === "1:45")) return("OneThirty");
    //return ("OneFortyFive");
    else if ((time_start === "2:00")||(time_start === "2:15")) return("Two");
    //return ("TwoFifteen");
    else if ((time_start === "2:30")||(time_start === "2:45"))return("TwoThirty");
    //return ("TwoFortyFive");
    else if ((time_start === "3:00")|| (time_start === "3:15")) return("Three");
    //return ("ThreeFifteen");
    else if ((time_start === "3:30")||(time_start === "3:45")) return("ThreeThirty");
    //return ("ThreeFortyFive");
    else if ((time_start === "4:00")||(time_start === "4:15"))  return("Four");
    //return ("FourFifteen");
    else if ((time_start === "4:30")||(time_start === "4:45"))  return("FourThirty");
    //return ("FourFortyFive");
    else if ((time_start === "5:00")||(time_start === "5:15")) return("Five");
    //return ("FiveFifteen");
    else if ((time_start === "5:30")||(time_start === "5:45"))  return("FiveThirty");
    //return ("FiveFortyFive");
    else if ((time_start === "6:00")||(time_start === "6:15")) return("Six");
    //return ("SixFifteen");
    else if ((time_start === "6:30")||(time_start === "6:45")) return("SixThirty");
    //return ("SixFortyFive");
    else if (time_start === "7:00") return("Seven");
    else return null;
  } 

  const convertEndTime = (time_end) => {
    if ((time_end === "8:00") ||(time_end === "8:15")) return("Eight");
    else if ((time_end === "8:30")||(time_end === "8:45")) return("EightThirty");
    //return ("EightFortyFive");
    else if ((time_end === "9:00")||(time_end === "9:15")) return("Nine");
    //return ("NineFifteen");
    else if ((time_end === "9:30")||(time_end === "9:45")) return("NineThirty");
    //return ("NineFortyFive");
    else if ((time_end === "10:00")||(time_end === "10:15") ) return("Ten");
    //return ("TenFifteen");
    else if ((time_end === "10:30")||(time_end === "10:45")  ) return("TenThirty");
    //return ("TenFortyFive");
    else if ((time_end === "11:00")||(time_end === "11:15") ) return("Eleven");
    //return ("ElevenFifteen");
    else if ((time_end === "11:30")||(time_end === "11:45")) return("ElevenThirty");
    // return ("ElevenFortyFive");
    else if ((time_end === "12:00")||(time_end === "12:15")) return("Twelve");
    //return ("TwelveFifteen");
    else if ((time_end === "12:30")||(time_end === "12:45")) return("TwelveThirty");
    //return ("TwelveFortyFive");
    else if ((time_end === "1:00")||(time_end === "1:15")) return("One");
    //return ("OneFifteen");
    else if ((time_end === "1:30")||(time_end === "1:45")) return("OneThirty");
    //return ("OneFortyFive");
    else if ((time_end === "2:00")||(time_end === "2:15")) return("Two");
    //return ("TwoFifteen");
    else if ((time_end === "2:30")||(time_end === "2:45"))return("TwoThirty");
    //return ("TwoFortyFive");
    else if ((time_end === "3:00")|| (time_end === "3:15")) return("Three");
    //return ("ThreeFifteen");
    else if ((time_end === "3:30")||(time_end === "3:45")) return("ThreeThirty");
    //return ("ThreeFortyFive");
    else if ((time_end === "4:00")||(time_end === "4:15"))  return("Four");
    //return ("FourFifteen");
    else if ((time_end === "4:30")||(time_end === "4:45"))  return("FourThirty");
    //return ("FourFortyFive");
    else if ((time_end === "5:00")||(time_end === "5:15")) return("Five");
    //return ("FiveFifteen");
    else if ((time_end === "5:30")||(time_end === "5:45"))  return("FiveThirty");
    //return ("FiveFortyFive");
    else if ((time_end === "6:00")||(time_end === "6:15")) return("Six");
    //return ("SixFifteen");
    else if ((time_end === "6:30")||(time_end === "6:45")) return("SixThirty");
    //return ("SixFortyFive");
    else if (time_end === "7:00") return("Seven");
    else return null;
  } 

  //This entire bottom section needs work
  if (props.day !== null) {
    if (props.display === props.id) {
      return (
            <p 
              className={`tableElement ${convertDay(props.day)}
              ${convertStartTime(props.startTime)} 
              ${convertEndTime(props.endTime)}`}
              onMouseOver={props.onMouseOver}
              onMouseLeave={props.onMouseLeave}
            >
              {props.course}<br/> 
              {props.startTime} to {props.endTime} <br/>
              {props.type} <br/>
              {props.room}
            </p>
          )
    } else {
      return (
        <p 
          className={`tableElement ${convertDay(props.day)}
          ${convertStartTime(props.startTime)} 
          ${convertEndTime(props.endTime)}`}
          onMouseOver={props.onMouseOver}
          onMouseLeave={props.onMouseLeave}
          onClick={props.onClick}
        >
          {props.course} <br/> 
          {props.startTime} to {props.endTime} 
        </p>
      )
    }
  } else {
    return null
  }
}

export default CourseInfo;
