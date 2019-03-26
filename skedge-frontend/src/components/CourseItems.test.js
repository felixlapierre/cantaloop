import React from 'react';
import ReactDOM from 'react-dom';
import CourseItems from './CourseItems';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CourseItems', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<CourseItems entries={[]}/>);
    expect(wrapper.length).toBe(1);
  });
});
