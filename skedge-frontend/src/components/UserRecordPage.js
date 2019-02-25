import React, {
  Component
} from 'react';
import '../styles/UserRecordPage.css';
import {
  Dropdown
} from 'semantic-ui-react'

const courseOptions = [{
    key: 'COMP 248',
    value: 'OOP 1',
    text: 'OOP 1'
  },
  {
    key: 'COMP 249',
    value: 'OOP 2',
    text: 'OOP 2'
  },
  {
    key: 'SOEN 228',
    value: 'Hardware',
    text: 'Hardware'
  }
]

//The page where the user can change its record etc.
class UserRecordPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <h3 id = "welcome-title" >
          Hi! Welcome to Skedge
        </h3>
        <h5>
          What classes have you taken?
        </h5>
        UserRecordPage <
        Dropdown color = 'black'
        placeholder = 'Select Course'
        fluid
        search
        selection
        options = {courseOptions}
        />
        <h5>
          What classes would you like to take?
        </h5>
        UserRecordPage <
        Dropdown color = 'black'
        placeholder = 'Select Course'
        fluid
        search
        selection
        options = {courseOptions}
        /> 
      </div>
    );
  }
}

export default UserRecordPage;
