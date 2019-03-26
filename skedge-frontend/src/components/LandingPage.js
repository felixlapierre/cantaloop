import React, { Component } from 'react';
import '../styles/LandingPage.css';
import axios from 'axios';
import {Button, Form, Grid, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

//LandingPage App class
//Renders the landing page and login form
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.state = {username: ''};
    this.state = {password: ''};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLoginGuest = this.handleLoginGuest.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(){
    console.log("Hello");
    /*console.log('Request Sending, ' + this.state.value);
    axios.put('http://localhost:4200/prototype', {"name": this.state.value})
    .then(res => {
        this.setState({name: "works"});
        console.log(res);
        console.log(res.data);
    });*/
  }

  handleLogin(event) {
      axios.post('/login', {username: this.state.username, password: this.state.password}).then(response => {
          console.log(response.data.token);
          window.sessionStorage.setItem( 'token' ,response.data.token);
      });
  }

  handleUsernameChange(event){
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event){
      this.setState({password: event.target.value});
  }

  handleRegister(event) {
    axios.post('/signup', {username: this.state.username, password: this.state.password}).then(response => {
        console.log('Received response' + response);
    });
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
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
