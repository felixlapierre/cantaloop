import React from 'react';
import ReactDOM from 'react-dom';
import HeaderPage from './HeaderPage';
import { Icon, Popup, Menu, MenuItem } from 'semantic-ui-react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('HeaderPage', () => {

    it('renders without crashing', () => {
      const wrapper = mount(<HeaderPage />);
      expect(wrapper.length).toBe(1);
    });

    it('Renders logo, Skedge and the user icon', () => {
      const wrapper = shallow(<HeaderPage />);
      const logo = wrapper.find('img');
      expect(logo.length).toBe(1);

      const pageHeaderTitle = wrapper.find('#pageHeaderTitle');
      expect(pageHeaderTitle.length).toBe(1);
      expect(pageHeaderTitle.text()).toBe('Skedge');

      const pageHeaderUserIcon = wrapper.find(Popup);
      expect(pageHeaderUserIcon.length).toBe(1);

    });

    it('Clicks on User Icon should display a popup', () => {
      const wrapper = shallow(<HeaderPage />);
      const popupMenu = wrapper.find(Popup);
      expect(popupMenu.length).toBe(1);
      popupMenu.simulate('click');
    });

    it('Clicks on go to record page from the popup menu', () => {
      const HandleRecordButtonClick = jest.spyOn(HeaderPage.prototype, 'handleRecordButtonClick');

      const wrapper = mount(<HeaderPage />);
      const popupMenu = wrapper.find(Popup);
      expect(popupMenu.length).toBe(1);
      popupMenu.simulate('click');

      const recordButton = wrapper.find('MenuItem');
      recordButton.at(0).simulate('click');
      expect(HandleRecordButtonClick).toHaveBeenCalled();
    });

    it('Clicks on logout choice from the popup menu', () => {
      const HandleLogout = jest.spyOn(HeaderPage.prototype, 'handleLogout');

      const wrapper = mount(<HeaderPage />);
      const popupMenu = wrapper.find(Popup);
      expect(popupMenu.length).toBe(1);
      popupMenu.simulate('click');

      const logoutButton = wrapper.find('MenuItem');
      logoutButton.at(1).simulate('click');
      expect(HandleLogout).toHaveBeenCalled();
    });
});
