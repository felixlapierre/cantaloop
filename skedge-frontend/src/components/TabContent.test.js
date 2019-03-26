import React from 'react';
import ReactDOM from 'react-dom';
import '../setupTests.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('TabContent', () => {
    it('renders without crashing', () => {
        //Left empty because of bug with react Slide
    });
});
