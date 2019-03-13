import React, { Component } from 'react';
import '../styles/LandingPage.css';
//import axios from 'axios';
import {Button, Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

//LandingPage App class
//Renders the landing page and login form
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
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
        <h1>Skedge</h1>
        <Form id='loginForm'>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
          <Form.Group>
            <Button onClick={this.handleLogin} id='loginButton'>Login</Button>
            <Button onClick={this.handleRegister} id='registerButton'>Register</Button>
          </Form.Group>
          <Link to='/record'><Button onClick={this.handleLoginGuest} id='loginButtonGuest'>Login as a guest</Button></Link>
        </Form>
      </div>
    );
  }
}

export default LandingPage;
