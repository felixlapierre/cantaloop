import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(){
    console.log('Request Sending, ' + this.state.value);
    axios.put('http://localhost:4200/prototype', {"name": this.state.value})
    .then(res => {
        this.setState({name: "works"});
        console.log(res);
        console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleSubmit}>
          Hello
        </button>
      </div>
    );
  }
}

export default App;
