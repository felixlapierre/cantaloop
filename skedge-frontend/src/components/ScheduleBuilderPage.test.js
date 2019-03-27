import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScheduleBuilderPage from './ScheduleBuilderPage';

configure({ adapter: new Adapter() });

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
describe('ScheduleBuilderPage', () => {
    it('renders without crashing', () => {
        const wrapper = mount(<BrowserRouter>
                                <ScheduleBuilderPage scheduleGiven={testJson} />
                              </BrowserRouter>);
        expect(wrapper.length).toBe(1);
    });
});
