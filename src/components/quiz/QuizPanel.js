import React, { Component } from 'react';
import logo from './logo.svg';

class QuizPanel extends Component {
  constructor(){
    super();
    this.state = {
      sprite: logo,
      names: ["name_0", "name_1", "name_2", "name_3"]
    };
  }

  componentDidMount() {
    fetch("http://localhost:50072/api/quiz")
    .then(results => {
      return results.json();
    }).then(data => {
      let sprite = data.correctAnswer.image;
      let names = data.fakeAnswers;
      this.setState({ sprite: sprite, names: names });
      console.log("state:", this.state.names, this.state.sprite);
    })
  }

  render() {
    return (
      <div className="container">
        QuizPanel
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container row">
          <button className="btn col-3">{this.state.names[0]}</button>
          <button className="btn col-3">{this.state.names[1]}</button>
          <button className="btn col-3">{this.state.names[2]}</button>
          <button className="btn col-3">{this.state.names[3]}</button>
        </div>
      </div>
    );
  }
}
  
  export default QuizPanel;