import React from 'react';
import ReactDOM from 'react-dom';
import Schedule from './Schedule';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Schedule', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Schedule season={'fall'} schedules={[]}/>);
    expect(wrapper.length).toBe(1);
  });
});
