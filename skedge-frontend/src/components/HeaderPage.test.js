import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import HeaderPage from './HeaderPage';
import { Icon, Popup, Menu, MenuItem } from 'semantic-ui-react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const historyMock = { push: jest.fn() };

describe('HeaderPage', () => {

    it('renders without crashing', () => {
      const wrapper = mount(<BrowserRouter>
                              <HeaderPage />
                            </BrowserRouter>);
      expect(wrapper.length).toBe(1);
      wrapper.unmount();
    });

    it('Renders logo, Skedge and the user icon', () => {
      const wrapper = mount(<BrowserRouter>
                              <HeaderPage />
                            </BrowserRouter>);
      const logo = wrapper.find('img');
      expect(logo.length).toBe(1);

      const pageHeaderTitle = wrapper.find('#pageHeaderTitle');
      expect(pageHeaderTitle.length).toBe(1);
      expect(pageHeaderTitle.text()).toBe('Skedge');

      const pageHeaderUserIcon = wrapper.find(Popup);
      expect(pageHeaderUserIcon.length).toBe(1);

      wrapper.unmount();
    });

    it('Clicks on User Icon should display a popup', () => {
      const wrapper = mount(<BrowserRouter>
                              <HeaderPage />
                            </BrowserRouter>);
      const popupMenu = wrapper.find(Popup);
      expect(popupMenu.length).toBe(1);
      popupMenu.simulate('click');

      wrapper.unmount();
    });

    it('Clicks on go to record page from the popup menu', () => {
      const wrapper = mount(<BrowserRouter>
                              <HeaderPage history={historyMock}/>
                            </BrowserRouter>);
      const popupMenu = wrapper.find(Popup);
      expect(popupMenu.length).toBe(1);
      popupMenu.simulate('click');

      const recordButton = wrapper.find('MenuItem');
      recordButton.at(0).simulate('click');
      //Missing how to check the history props has changed

      wrapper.unmount();
    });

    it('Clicks on logout choice from the popup menu', () => {
      const wrapper = mount(<BrowserRouter>
                              <HeaderPage history={historyMock}/>
                            </BrowserRouter>);
      const popupMenu = wrapper.find(Popup);
      expect(popupMenu.length).toBe(1);
      popupMenu.simulate('click');

      const logoutButton = wrapper.find('MenuItem');
      logoutButton.at(1).simulate('click');
      //Missing how to check the history props has changed

      wrapper.unmount();
    });
});
