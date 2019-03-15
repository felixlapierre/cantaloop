import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import LandingPage from './components/LandingPage';
import ScheduleBuilderPage from './components/ScheduleBuilderPage';
import TabContent from './components/TabContent';
import UserRecordPage from './components/UserRecordPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Eventually this will be replaced by something received from the backend
const testJson = [
  {
    "year":"2019",
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
      <Route path="/schedule" render={(props) => <ScheduleBuilderPage scheduleGiven={testJson} />}/>
      <Route path="/record" component={UserRecordPage} />
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
