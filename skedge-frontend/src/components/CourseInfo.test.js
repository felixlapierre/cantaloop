import React from 'react';
import ReactDOM from 'react-dom';
import CourseInfo from './CourseInfo';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CourseInfo', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<CourseInfo day={"Mo"} startTime={"8:20AM"} endTime={"8:20AM"} type={'H'}/>);
    expect(wrapper.length).toBe(1);
  });
});
