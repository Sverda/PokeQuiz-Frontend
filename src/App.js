import React, { Component } from 'react';
import './App.css';
import {Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
