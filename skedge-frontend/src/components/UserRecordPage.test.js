import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import UserRecordPage from './UserRecordPage';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let authToken = 'hello';
let location = {authToken};

describe('UserRecordPage', () => {
    it('renders without crashing', () => {
      const wrapper = mount(<BrowserRouter>
                              <UserRecordPage location={location}/>
                            </BrowserRouter>);
      expect(wrapper.length).toBe(1);
    });
});
