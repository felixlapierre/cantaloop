import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import LandingPage from './LandingPage';
import {Button, Form, Grid, Segment} from 'semantic-ui-react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const historyMock = { push: jest.fn() };

describe('LandingPage', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<BrowserRouter>
                            <LandingPage />
                          </BrowserRouter>);
    expect(wrapper.length).toBe(1);
  });


  it('Renders three Button and 2 Form input', () => {
    const wrapper = shallow(<LandingPage />);
    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(3);

    const inputs = wrapper.find(Form.Input);
    expect(inputs.length).toBe(2);
  });

  it('Clicks on Login as guest button', () => {
    const HandleLoginGuest = jest.spyOn(LandingPage.prototype, 'handleLoginGuest');

    const wrapper = shallow(<LandingPage history={historyMock}/>);
    const loginButtonGuest = wrapper.find('#loginButtonGuest');
    loginButtonGuest.simulate('click');
    expect(HandleLoginGuest).toHaveBeenCalled();
  });


  it('Clicks on Login button', () => {
    const HandleLogin = jest.spyOn(LandingPage.prototype, 'handleLogin');

    const wrapper = shallow(<LandingPage />);
    const loginButton = wrapper.find('#loginButton');
    loginButton.simulate('click');
    expect(HandleLogin).toHaveBeenCalled();
  });


  it('Clicks on Register button', () => {
    const HandleRegister = jest.spyOn(LandingPage.prototype, 'handleRegister');

    const wrapper = shallow(<LandingPage />);
    const registerButton = wrapper.find('#registerButton');
    registerButton.simulate('click');
    expect(HandleRegister).toHaveBeenCalled();
  });


});
