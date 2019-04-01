import React, {Component} from 'react';
import CourseInfo from './CourseInfo'
import './CourseInfo.css'

class WeeklySchedule extends Component
{
    constructor(props)
    {
        super(props);
        this.courseInfos = [];
        for(var courseId in this.props.schedule)
        {
          for(var classType in this.props.schedule[courseId])
          { 
            this.courseInfos.push(
              <CourseInfo 
                course={courseId}
                type={classType}
                startTime={this.props.schedule[courseId][classType.time_start]}
                endTime={this.props.schedule[courseId][classType].time_end}
                day={this.props.schedule[courseId][classType].days}
              />)
          }
        } 
    }
    render()
    {
        return (
            <div className='myCourses'>
              <div className='timetable'>
              <section className='timeWrapper'>
                <div>8:30</div>
                <div>9:00</div>
                <div>9:30</div>
                <div>10:00</div>
                <div>10:30</div>
                <div>11:00</div>
                <div>11:30</div>
                <div>12:00</div>
                <div>12:30</div>
                <div>1:00</div>
                <div>1:30</div>
                <div>2:00</div>
                <div>2:30</div>
                <div>3:00</div>
                <div>3:30</div>
                <div>4:00</div>
                <div>4:30</div>
                <div>5:00</div>
                <div>5:30</div>
                <div>6:00</div>
              </section>
                <section className='titleWrapper'>
                  <p className='timeColumn'>TIME</p>
                  <p className='monday'>MONDAY</p>
                  <p className='tuesday'>TUESDAY</p>
                  <p className='wednesday'>WEDNESDAY</p>
                  <p className='thursday'>THURSDAY</p>
                  <p className='friday'>FRIDAY</p>
                </section>
                <CourseInfo> {this.courseInfos} </CourseInfo>
            </div>          
          </div>
        )
    }
} 
export default WeeklySchedule;
