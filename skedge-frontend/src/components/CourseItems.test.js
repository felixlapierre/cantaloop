import React from 'react';
import ReactDOM from 'react-dom';
import CourseItems from './CourseItems';

describe('CourseItems', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CourseItems entries={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
