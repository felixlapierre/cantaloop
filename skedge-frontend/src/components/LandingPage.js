import React, { Component } from 'react';
import '../styles/LandingPage.css';
//import axios from 'axios';
import {Button, Form, Grid, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

//LandingPage App class
//Renders the landing page and login form
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLoginGuest = this.handleLoginGuest.bind(this);
  }

  handleLogin(event) {
    console.log("Login");
  }

  handleRegister(event) {
    console.log("Register");
  }

  handleLoginGuest(event) {
    console.log("Guest");
  }

  render() {
    return (
      <div id='landingPage'>
        <div id='skedgeLogo'>Skedge</div>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form id='loginForm'>
              <Segment>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                <Form.Group>
                  <Button fluid onClick={this.handleLogin} id='loginButton'>Login</Button>
                  <Button fluid onClick={this.handleRegister} id='registerButton'>Register</Button>
                </Form.Group>
                <Link to='/record'><Button onClick={this.handleLoginGuest} id='loginButtonGuest'>Login as a guest</Button></Link>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
