import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ""};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Request Sending');
    axios.put('/localhost/prototype', {"name": "Jon"})
    .then(res => {
        this.setState({name: "works"});
        console.log(res);
        console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        Hello World
        <button onClick={this.handleClick}>
          Send Request
        </button>
      </div>
    );
  }
}

export default App;
