import React, { Component } from 'react';
import './App.css';
import QuizPanel from './QuizPanel';
import NavPanel from './NavPanel';

class App extends Component {
  render() {
    return (
      <div className="row">
          <div className="container col-2">
            <NavPanel/>
          </div>

          <div className="col-10 container bg-primary">
            <div className="row justify-content-center"><h1>PokeQuiz</h1></div>
            <hr/>
            <QuizPanel/>
          </div>
      </div>
    );
  }
}

export default App;
