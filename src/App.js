import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container bg-primary">
        <p className="text-primary">.text-primary</p>
        <p className="text-secondary">.text-secondary</p>
        <p className="text-success">.text-success</p>
        <p className="text-danger">.text-danger</p>
      </div>
    );
  }
}

export default App;
