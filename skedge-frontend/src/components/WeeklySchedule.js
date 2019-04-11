import React, {Component} from 'react';
import CourseInfo from './CourseInfo'
import './CourseInfo.css'

class WeeklySchedule extends Component
{
    constructor(props)
    {
        super(props);
        this.courseInfos = [];
        this.updateCourseState = this.updateCourseState.bind(this);
    }

    componentWillUpdate()
    { 
      this.courseInfos = []
    }

    updateCourseState(){
      console.log(this.props.schedule);
      var newCourseInfos = [];
      for(var courseId in this.props.schedule)
      {
        for(var classType in this.props.schedule[courseId])
        {
          var length=this.props.schedule[courseId][classType].days;
          console.log(length);
          if (length.length==2)
          {
          newCourseInfos.push(
            <CourseInfo 
              key={courseId+classType+this.props.scheduleNumber}
              course={courseId}
              type={classType}
              startTime={this.props.schedule[courseId][classType].time_start}
              endTime={this.props.schedule[courseId][classType].time_end}
              day={this.props.schedule[courseId][classType].days}
            />
          );
          }
          else if (length.length==4)
          {
            var Day1=length.substring(0,1);
            var Day2=length.substring(2,3);
            newCourseInfos.push(
              <CourseInfo 
                key={courseId+classType+this.props.scheduleNumber}
                course={courseId}
                type={classType}
                startTime={this.props.schedule[courseId][classType].time_start}
                endTime={this.props.schedule[courseId][classType].time_end}
                days={Day1}
              />
            );
            newCourseInfos.push(
              <CourseInfo 
                key={courseId+classType+this.props.scheduleNumber}
                course={courseId}
                type={classType}
                startTime={this.props.schedule[courseId][classType].time_start}
                endTime={this.props.schedule[courseId][classType].time_end}
                days={Day2}
              />
            );
          }
        }
      }
      this.courseInfos = newCourseInfos;
    }

    render()
    {
      this.updateCourseState();
        return (
            <div className='myCourses'>
              <div className='timetable'>
              <section className='timeWrapper'>
                <div>08:00</div>
                <div></div>
                <div>09:00</div>
                <div></div>
                <div>10:00</div>
                <div></div>
                <div>11:00</div>
                <div></div>
                <div>12:00 </div>
                <div></div>
                <div>13:00 </div>
                <div></div>
                <div>14:00</div>
                <div></div>
                <div>15:00</div>
                <div></div>
                <div>16:00</div>
                <div></div>
                <div>17:00</div>
                <div></div>
                <div>18:00</div>
                <div></div>
                <div>19:00</div>
                <div></div>
                <div>20:00</div>
                <div></div>
                <div>21:00</div>
                <div></div>
                <div>22:00</div>
              </section>
                <section className='titleWrapper'>
                  <p className='timeColumn'>TIME</p>
                  <p className='monday'>MONDAY</p>
                  <p className='tuesday'>TUESDAY</p>
                  <p className='wednesday'>WEDNESDAY</p>
                  <p className='thursday'>THURSDAY</p>
                  <p className='friday'>FRIDAY</p>
                </section>
                {this.courseInfos}
            </div>          
          </div>
        )
    }
} 
export default WeeklySchedule;
