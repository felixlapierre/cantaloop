import React, { Component } from 'react';
import '../styles/HeaderPage.css';
import logo from '../images/cantaloop.png';
import { Icon } from 'semantic-ui-react';

//The header of the page after a user logs in, will always be at the top of the page.
class HeaderPage extends Component {
  constructor(props) {
    super(props);

    this.handleIconClick = this.handleIconClick.bind(this);
  }

  handleIconClick(){
    console.log("Icon was click");
  }

  render() {
    return (
      <div id='headerPage'>
        <img id='pageHeaderLogo' alt='Logo' src={logo} width="50px" height="50px"/>
        <div id='pageHeaderTitle'>Skedge</div>
        <Icon id='pageHeaderUserIcon' name='user' size='big' onClick={this.handleIconClick}/>
      </div>
    );
  }
}

export default HeaderPage;
