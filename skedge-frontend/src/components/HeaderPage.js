import React, { Component } from 'react';
import '../styles/HeaderPage.css';
import logo from '../images/cantaloop.png';
import { Icon, Popup, Menu } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

//The header of the page after a user logs in, will always be at the top of the page.
class HeaderPage extends Component {
  constructor(props) {
    super(props);
    this.state = { authToken : props.location.authToken };
    

    this.handleRecordButtonClick = this.handleRecordButtonClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleRecordButtonClick(){
    console.log("Record");
    this.props.history.push({
      pathname: '/record',
      authToken: this.state.authToken
    }); 

  }

  handleLogout(){
    if (window.confirm('Are you sure you wish to end your session?')) {
      window.sessionStorage.clear();
      this.props.history.push("/"); // Switch to landing page
    }
  }

  handleLogin(){
      this.props.history.push("/"); // Switch to landing page
  }

  logoutORlogin() // depends on whether you are logged in as a guest or not
  {
    if(window.sessionStorage.getItem('token') === null)
    {
      return (
        <Menu.Item
          name='Login'
          onClick={this.handleLogin}
        />
      );
    }
    else {
      return (
        <Menu.Item
          name='Logout'
          onClick={this.handleLogout}
        />
      );
    }
  }

  render() {
    const UserIconWithCaret = (
      <div id='pageHeaderUserIcon'>
        <Icon id='userLogoCaret' size='large' name='caret down' />
        <Icon name='user' size='big' />
      </div>
    )

    const MenuForPopup = (
      <Menu vertical>
        <Menu.Item
          name='My Record'
          onClick={this.handleRecordButtonClick}
        />

        {this.logoutORlogin()}

      </Menu>
    )

    return (
      <div id='headerPage'>
        <img id='pageHeaderLogo' alt='Logo' src={logo} width="45px" height="45px"/>
        <div id='pageHeaderTitle'>Skedge</div>
        <Popup id='popupMenu' trigger={UserIconWithCaret} content={MenuForPopup} on='click' hideOnScroll/>
      </div>
    );
  }
}

export default withRouter(HeaderPage);
