import React from 'react';
import ReactDOM from 'react-dom';
import SemesterItems from './SemesterItems';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SemesterItems', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<SemesterItems semesters={[]}/>);
    expect(wrapper.length).toBe(1);
  });
});
