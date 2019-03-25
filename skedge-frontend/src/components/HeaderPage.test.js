import React from 'react';
import ReactDOM from 'react-dom';
import HeaderPage from './HeaderPage';
import { Icon, Popup, Menu } from 'semantic-ui-react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('HeaderPage', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<HeaderPage />, div);
      ReactDOM.unmountComponentAtNode(div);
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

    it('Clicks on User Icon should display a popup. Checks the record choice', () => {
      const HandleRecordButtonClick = jest.spyOn(HeaderPage.prototype, 'handleRecordButtonClick');

      const wrapper = shallow(<HeaderPage />);
      const popupMenu = wrapper.find(Popup);
      expect(popupMenu.length).toBe(1);
      popupMenu.simulate('click');
    //  const menu = shallow(popupMenu.prop('trigger')())


      //expect(HandleLoginGuest).toHaveBeenCalled();
    });
});
