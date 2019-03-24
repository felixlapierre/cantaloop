import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import UserRecordPage from './UserRecordPage';


describe('UserRecordPage', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter>
                        <UserRecordPage />
                      </BrowserRouter>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
