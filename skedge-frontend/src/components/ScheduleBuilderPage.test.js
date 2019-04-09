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
let authToken = 'hello';
let location = {authToken};

describe('ScheduleBuilderPage', () => {
    it('renders without crashing', () => {
        const wrapper = mount(<BrowserRouter>
                                <ScheduleBuilderPage scheduleGiven={testJson} location={location}/>
                              </BrowserRouter>);
        expect(wrapper.length).toBe(1);

        wrapper.unmount();
    });

    it('Click on the Hamburger Menu', () => {
        const HandleHamburgerButton = jest.spyOn(ScheduleBuilderPage.prototype, 'handleHamburgerButton');
        const HandleDimmedPusher = jest.spyOn(ScheduleBuilderPage.prototype, 'handleDimmedPusher');

        const wrapper = mount(<BrowserRouter>
                                <ScheduleBuilderPage scheduleGiven={testJson} location={location}/>
                              </BrowserRouter>);
        expect(wrapper.length).toBe(1);

        const icons = wrapper.find('Icon');
        expect(icons.length).toBe(4);

        const hamburgerButton = icons.find('#hamburgerButton')
        expect(hamburgerButton.length).toBe(2);

        hamburgerButton.at(1).simulate('click');
        expect(HandleHamburgerButton).toHaveBeenCalled();

        hamburgerButton.at(1).simulate('click');
        expect(HandleDimmedPusher).toHaveBeenCalled();

        wrapper.unmount();
    });

    it('Change the value in the Dropdown to search for a class', () => {
        const HandleDropdownChange = jest.spyOn(ScheduleBuilderPage.prototype, 'handleDropdownChange');
        const event = {target: {name: "Comp348", value: "Comp348"}};

        const wrapper = mount(<BrowserRouter>
                                <ScheduleBuilderPage scheduleGiven={testJson} location={location}/>
                              </BrowserRouter>);
        expect(wrapper.length).toBe(1);

        const dropdown = wrapper.find('Dropdown');
        expect(dropdown.length).toBe(1);

        dropdown.simulate('change', event);
        expect(HandleDropdownChange).toHaveBeenCalled();

        wrapper.unmount();
    });

    it('Click on one of the courses in the list to remove it', () => {
        const HandleDropdownChange = jest.spyOn(ScheduleBuilderPage.prototype, 'handleDropdownChange');
        const ListItemClicked = jest.spyOn(ScheduleBuilderPage.prototype, 'listItemClicked');
        const event = {target: {name: "Comp348", value: "Comp348"}};

        const wrapper = mount(<BrowserRouter>
                                <ScheduleBuilderPage scheduleGiven={testJson} location={location}/>
                              </BrowserRouter>);
        expect(wrapper.length).toBe(1);

        const dropdown = wrapper.find('Dropdown');
        expect(dropdown.length).toBe(1);

        dropdown.simulate('change', event);
        expect(HandleDropdownChange).toHaveBeenCalled();

        wrapper.update();

        const listItem = wrapper.find('#coursesTaking');
        expect(listItem.length).toBe(1);
        const listItemButton = listItem.find('ListItem');
        expect(listItemButton.length).toBe(1);

        listItemButton.simulate('click');
        expect(ListItemClicked).toHaveBeenCalled();

        wrapper.unmount();
    });
});
