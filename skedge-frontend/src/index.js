import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import LandingPage from './components/LandingPage';
import ScheduleBuilderPage from './components/ScheduleBuilderPage';
import UserRecordPage from './components/UserRecordPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Eventually this will be replaced by something received from the backend
const testJson = [
  {
    "year":"2019",
    "season":"fall",
    "credits":15,
    "schedules":[
      {
        "COMP 346" : {
         
            "lecture": {
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"TuTh"
          },
            "lab" :{
            "time_start":"10:00",
            "time_end":"11:00",
            "days":"TuTh"
          },
            "tutorial":{
            "time_start":"11:15",
            "time_end":"12:00",
            "days":"TuTh"
          }
        },
        "SOEN 341" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"12:30",
            "days":"Fr"
          },
          "tutorial":{
            "time_start":"2:25",
            "time_end":"4:00",
            "days":"Mo"
          },
          "lab":{
            "time_start":"12:30",
            "time_end": "2:20",
            "days": "We"
          }
        },
        
        "COMP 321" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"12:30",
            "days":"Fr"
          },
          "tutorial":{
            "time_start":"2:25",
            "time_end":"4:00",
            "days":"Mo"
          }
        }
      
      },
      {
        "COMP 352" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"Tu"
          },
          "lab" :{
            "time_start":"10:45",
            "time_end":"12:00",
            "days":"Tu"
          },
          "tutorial":{
            "time_start":"10:30",
            "time_end":"12:00",
            "days":"Th"
          }
        },
        "ENGR 202" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"Mo"
          }
        },
        "ENGR 391" : {
          "lecture" : {
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"Fr"
          },
          "lab" :{
            "time_start":"8:45",
            "time_end":"10:00",
            "days":"We"
          },
          "tutorial":{
            "time_start":"4:00",
            "time_end":"6:00",
            "days":"We"
          }
        }
      },
      {
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
      }
    ]
  },
  {
    "year":"2019",
    "season":"winter",
    "credits":200,
    "schedules":[
      {
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
      },
      {
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
      },
      {
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
      }
    ]
  },
  {
    "year":"2019",
    "season":"summer",
    "credits":200,
    "schedules":[
      {
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
      },
      {
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
      },
      {
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
      }
    ]
  },
  {
    "year":"2020",
    "season":"fall",
    "credits":200,
    "schedules":[
      {
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
      },
      {
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
      },
      {
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
      }
    ]
  },
  {
    "year":"2020",
    "season":"winter",
    "credits":200,
    "schedules":[
      {
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
      },
      {
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
      },
      {
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
      }
    ]
  },
  {
    "year":"2020",
    "season":"summer",
    "credits":200,
    "schedules":[
      {
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
      },
      {
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
      },
      {
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
      }
    ]
  },
];

//Render the main component, which is called Skedge.
ReactDOM.render(
  <Router>
    <div id='container'>
      <Route exact path="/" component={LandingPage} />
      <Route path="/schedule" render={(props) => <ScheduleBuilderPage scheduleGiven={testJson}/>}/>
      <Route path="/record" component={UserRecordPage} />
    </div>
  </Router>, document.getElementById('root'));
