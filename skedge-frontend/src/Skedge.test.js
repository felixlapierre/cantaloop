import React from 'react';
import ReactDOM from 'react-dom';
import Skedge from './Skedge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skedge />, div);
  ReactDOM.unmountComponentAtNode(div);
});
