import React, { Component } from 'react';
import '../styles/LandingPage.css';
import { axios_secure as axios } from '../services/AxiosEncrypted';
import {Button, Form, Grid, Segment} from 'semantic-ui-react';

const jwt = require('jsonwebtoken');

//LandingPage App class
//Renders the landing page and login form
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rsaPublicKey: '',
      errorWhenLoggingIn: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLoginGuest = this.handleLoginGuest.bind(this);

    // Save server's public key to session storage
  axios.get('https://cors.io/?https://pastebin.com/raw/8FH01qXk')
    .then(res => {
      window.sessionStorage.setItem( 'rsa_pubKey', res.data);
    }).catch(function (error) {
      console.log(error);
    });
  }
  
  componentDidMount(){
    window.sessionStorage.setItem('courseSequence', JSON.stringify([]));
    window.sessionStorage.setItem('courseRecord', JSON.stringify([]));
    window.sessionStorage.setItem('semesters', JSON.stringify([]));
  }

  // TODO: ensure password is hashed before sending it to backend
  handleLogin(event, goToSchedule = true) {

      axios.post('/users/login', {username: this.state.username, password: this.state.password}).then(res => {
          // Verify that the wrapper token was sent from the server using user password.
          let wrapperToken;
          try {
            wrapperToken = jwt.verify(res.data.token, this.state.password);
          } catch (error) {
            console.log(error)
            alert("Login unsuccessful. Could not verify server signature.");
          }
          // Save authToken to memory (NOT TO SESSION STORAGE)
          let authToken = wrapperToken.authToken;

          this.setState({errorWhenLoggingIn: false});
          // Switch to user record page and pass the authToken in the state (NOT USING SESSION STORAGE)
          let pathName;
          if (goToSchedule){
            pathName = '/schedule';
          } else {
            pathName = '/record';
          }
          this.props.history.push({
            pathname: pathName,
            authToken: authToken
          }); 
          
      }).catch(error => {
        console.log(error);
        // Reset fields
        this.setState({
          value: '',
          username: '',
          password: '',
          errorWhenLoggingIn: true
        })
      });
  }


  
  handleUsernameChange(event){
    this.setState({username: event.target.value});
  }
  
  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }
  
  handleRegister(event) {
    axios.post('/users/register', {username: this.state.username, password: this.state.password})
    .then(response => {
        console.log('Received response' + response);
        this.handleLogin(undefined, false);
    });
  }
  
  handleLoginGuest(event) {
    console.log("Guest");
    this.props.history.push('/record')
  }
  
  // Display error messages
  renderErrorMessage() {
    if(this.state.errorWhenLoggingIn === true) {
      return (
        <p id='errorMessage'>Wrong username or password</p>
      )
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div id='landingPage'>
        <div id='skedgeLogo'>Skedge</div>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form id='loginForm'>
              <Segment>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleUsernameChange}/>
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                            value={this.state.password}
                            onChange={this.handlePasswordChange}/>
                <Form.Group>
                  <Button fluid onClick={this.handleLogin} id='loginButton'>Login</Button>
                  <Button fluid onClick={this.handleRegister } id='registerButton'>Register</Button>
                </Form.Group>
                <Button onClick={this.handleLoginGuest} id='loginButtonGuest'>Login as a guest</Button>
                {this.renderErrorMessage()}
              </Segment>

            </Form>
          </Grid.Column>
        </Grid>
        </div>
        );
      }
    }
    
    export default LandingPage;
    