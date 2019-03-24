import React from 'react';
import ReactDOM from 'react-dom';
import HeaderPage from './HeaderPage';


describe('HeaderPage', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<HeaderPage />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
