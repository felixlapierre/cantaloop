import React, { Component } from 'react';
import '../styles/LandingPage.css';
import axios from 'axios';
import {Button, Form, Grid, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { publicEncrypt } from 'crypto';

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
    
    axios.get('https://cors.io/?https://pastebin.com/raw/Dz7ng2pk')
    .then(res => {
      this.setState({ rsaPublicKey: res.data});
      window.sessionStorage.setItem( 'rsa_pubKey', res.data);
    }).catch(function (error) {
      console.log(error);
    });
  }
  
  // TODO: ensure password is hashed before sending it to backend
  handleLogin(event) {
    let userBuffer = new Buffer(this.state.username)
    let username_rsa_base64 = publicEncrypt(this.state.rsaPublicKey, userBuffer).toString('base64');
    axios.post('/users/login', {username: this.state.username, username_rsa:username_rsa_base64, password: this.state.password})
    .then(res => {
      window.sessionStorage.setItem( 'token', res.data.token);
      this.props.history.push("record"); // Switch to the user record page
      this.setState({errorWhenLoggingIn: false})
    }).catch(error => {
      // Reset fields
      this.setState({
        value: '',
        username: '',
        password: '',
        errorWhenLoggingIn: true
      })
    })
  }
  
  handleUsernameChange(event){
    this.setState({username: event.target.value});
  }
  
  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }
  
  handleRegister(event) {
    axios.post('/users/register', {username: this.state.username, password: this.state.password}).then(response => {
      console.log('Received response' + response);
    });
  }
  
  handleLoginGuest(event) {
    console.log("Guest");
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
        <Button fluid onClick={this.handleRegister} id='registerButton'>Register</Button>
        </Form.Group>
        <Link to='/record'><Button onClick={this.handleLoginGuest} id='loginButtonGuest'>Login as a guest</Button></Link>
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
    