import React, { Component } from 'react';
import './App.css';
import QuizPanel from './QuizPanel';
import NavPanel from './NavPanel';

const myRow = {
  height: "100px"
};

class App extends Component {
  render() {
    return (
      <div className="row" style={myRow}>
          <div className="col-3">
            <NavPanel/>
          </div>

          <div className="col-6 container bg-primary">
            <div className="row justify-content-center"><h1>PokeQuiz</h1></div>
            <hr/>
            <QuizPanel/>
          </div>
          
          <div className="col-3"></div>
      </div>
    );
  }
}

export default App;
