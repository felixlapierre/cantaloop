import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import ScheduleBuilderPage from './ScheduleBuilderPage';


describe('ScheduleBuilderPage', () => {
    it('renders without crashing', () => {
      const scheduleGiven1 = {
        "courseId1" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          },
          "lab" :{
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          },
          "tutorial":{
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          }
        },
        "courseId2" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          },
          "lab" :{
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          },
          "tutorial":{
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          }
        },
        "courseId3" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          },
          "lab" :{
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          },
          "tutorial":{
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          }
        }
      };
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter>
                        <ScheduleBuilderPage scheduleGiven={[scheduleGiven1]}/>
                      </BrowserRouter>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
