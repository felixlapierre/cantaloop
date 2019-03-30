import React from 'react';
import "./WeeklySchedule.css"

const CourseInfo = (props) => {

  const convertDay = (days) => {
    if (days.length==4)   //Needs work
    {
        if (days.contains('Mo')) return("monday");
        else if (days.contains('Tu')) return("tuesday");
        else if (days.contains('We')) return("wednesday");
        else if (days.contains('Th')) return("thursday");
        else if (days.contains('Fr')) return("friday");
    }
    if (days.length==2)
    {
        if (days.contains('Mo')) return("monday");
        else if (days.contains('Tu')) return("tuesday");
        else if (days.contains('We')) return("wednesday");
        else if (days.contains('Th')) return("thursday");
        else if (days.contains('Fr')) return("friday");
    }
    else return null;
  }

  const convertStartTime = (start) => {
    if ((start === "8:00") ||(start === "8:15")) return("Eight");
    else if ((start === "8:30")||(start === "8:45")) return("EightThirty");
    //return ("EightFortyFive");
    else if ((start === "9:00")||(start === "9:15")) return("Nine");
    //return ("NineFifteen");
    else if ((start === "9:30")||(start === "9:45")) return("NineThirty");
    //return ("NineFortyFive");
    else if ((start === "10:00")||(start === "10:15") ) return("Ten");
    //return ("TenFifteen");
    else if ((start === "10:30")||(start === "10:45")  ) return("TenThirty");
    //return ("TenFortyFive");
    else if ((start === "11:00")||(start === "11:15") ) return("Eleven");
    //return ("ElevenFifteen");
    else if ((start === "11:30")||(start === "11:45")) return("ElevenThirty");
    // return ("ElevenFortyFive");
    else if ((start === "12:00")||(start === "12:15")) return("Twelve");
    //return ("TwelveFifteen");
    else if ((start === "12:30")||(start === "12:45")) return("TwelveThirty");
    //return ("TwelveFortyFive");
    else if ((start === "1:00")||(start === "1:15")) return("One");
    //return ("OneFifteen");
    else if ((start === "1:30")||(start === "1:45")) return("OneThirty");
    //return ("OneFortyFive");
    else if ((start === "2:00")||(start === "2:15")) return("Two");
    //return ("TwoFifteen");
    else if ((start === "2:30")||(start === "2:45"))return("TwoThirty");
    //return ("TwoFortyFive");
    else if ((start === "3:00")|| (start === "3:15")) return("Three");
    //return ("ThreeFifteen");
    else if ((start === "3:30")||(start === "3:45")) return("ThreeThirty");
    //return ("ThreeFortyFive");
    else if ((start === "4:00")||(start === "4:15"))  return("Four");
    //return ("FourFifteen");
    else if ((start === "4:30")||(start === "4:45"))  return("FourThirty");
    //return ("FourFortyFive");
    else if ((start === "5:00")||(start === "5:15")) return("Five");
    //return ("FiveFifteen");
    else if ((start === "5:30")||(start === "5:45"))  return("FiveThirty");
    //return ("FiveFortyFive");
    else if ((start === "6:00")||(start === "6:15")) return("Six");
    //return ("SixFifteen");
    else if ((start === "6:30")||(start === "6:45")) return("SixThirty");
    //return ("SixFortyFive");
    else if (start === "7:00") return("Seven");
    else return null;
  } 

  const convertEndTime = (time_end) => {
    if ((time_end === "9:30")||(time_end === "9:45")) return("endNineThirty");
    //return ("NineFortyFive");
    else if ((time_end === "10:00")||(time_end === "10:15") ) return("endTen");
    //return ("TenFifteen");
    else if ((time_end === "10:30")||(time_end === "10:45")  ) return("endTenThirty");
    //return ("TenFortyFive");
    else if ((time_end === "11:00")||(time_end === "11:15") ) return("endEleven");
    //return ("ElevenFifteen");
    else if ((time_end === "11:30")||(time_end === "11:45")) return("endElevenThirty");
    // return ("ElevenFortyFive");
    else if ((time_end === "12:00")||(time_end === "12:15")) return("endTwelve");
    //return ("TwelveFifteen");
    else if ((time_end === "12:30")||(time_end === "12:45")) return("endTwelveThirty");
    //return ("TwelveFortyFive");
    else if ((time_end === "1:00")||(time_end === "1:15")) return("endOne");
    //return ("OneFifteen");
    else if ((time_end === "1:30")||(time_end === "1:45")) return("endOneThirty");
    //return ("OneFortyFive");
    else if ((time_end === "2:00")||(time_end === "2:15")) return("endTwo");
    //return ("TwoFifteen");
    else if ((time_end === "2:30")||(time_end === "2:45"))return("endTwoThirty");
    //return ("TwoFortyFive");
    else if ((time_end === "3:00")|| (time_end === "3:15")) return("endThree");
    //return ("ThreeFifteen");
    else if ((time_end === "3:30")||(time_end === "3:45")) return("endThreeThirty");
    //return ("ThreeFortyFive");
    else if ((time_end === "4:00")||(time_end === "4:15"))  return("endFour");
    //return ("FourFifteen");
    else if ((time_end === "4:30")||(time_end === "4:45"))  return("endFourThirty");
    //return ("FourFortyFive");
    else if ((time_end === "5:00")||(time_end === "5:15")) return("endFive");
    //return ("FiveFifteen");
    else if ((time_end === "5:30")||(time_end === "5:45"))  return("endFiveThirty");
    //return ("FiveFortyFive");
    else if ((time_end === "6:00")||(time_end === "6:15")) return("endSix");
    //return ("SixFifteen");
    else if ((time_end === "6:30")||(time_end === "6:45")) return("endSixThirty");
    //return ("SixFortyFive");
    else if (time_end === "7:00") return("endSeven");
    else return null;
  } 

  //This entire bottom section needs work
      return (
            <p 
              className={`tableElement ${convertDay(props.days)}
              ${convertStartTime(props.time_start)} 
              ${convertEndTime(props.time_end)}`}
            >
              {props.ID}<br/> 
              {props.time_start} to {props.time_end} <br/>
              {props.Type} <br/>
            </p>
          )
}

export default CourseInfo;
