import React, { Component } from 'react';
import './App.css';
import QuizPanel from './components/quiz/QuizPanel';
import NavPanel from './components/shared/NavPanel';
import TitlePanel from './components/shared/TitlePanel';

class App extends Component {
  render() {
    return (
      <div className="row">
          <div className="container col-2">
            <NavPanel/>
          </div>

          <div className="col-10 container bg-primary">
            <TitlePanel/>
            <QuizPanel/>
          </div>
      </div>
    );
  }
}

export default App;
