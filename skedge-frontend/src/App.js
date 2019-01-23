import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ""};
  }

  componentDidMount() {
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
      </div>
    );
  }
}

export default App;
