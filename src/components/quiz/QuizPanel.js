import React, { Component } from 'react';

const stylee = {
  spriteDiv: {
    width: "70%",
    height: "70%"
  },
  img: {
    width: "70%",
    height: "70%"
  }
};

const API = "http://localhost:50072/api/";
const QUIZQUESTION = "quiz/question";
const QUIZANSWER = "quiz/answer/{name}";

class QuizPanel extends Component {
  constructor(){
    super();

    this.state = {
      sprite: "",
      names: ["name_0", "name_1", "name_2", "name_3"],
      win: false
    };
    this.cookie = "";
  }

  componentDidMount() {
    fetch(API + QUIZQUESTION, {
      method: "GET",
      credentials: "include"
    })
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ 
        sprite: data.correctAnswer.image, 
        names: data.fakeAnswers, 
        win: false
       });
    })
  }

  sendAnswer(name, e) {
    let url = API + QUIZANSWER.replace("{name}", name);
    fetch(url, {
      method: "GET",
      credentials: "include"
    })
    .then(response => response.json())
    .then(answer => {
      console.log("answer: " + answer);
      this.setState({
        sprite: this.state.sprite,
        names: this.state.names,
        win: answer
      });
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="container" style={stylee.spriteDiv}>
          <img src={"data:image/png;base64," + this.state.sprite} alt="sprite" className="img-fluid" style={stylee.img}/>
        </div>
        <div className="container row">
          <button className="btn col-3" onClick={this.sendAnswer.bind(this, this.state.names[0])}>{this.state.names[0]}</button>
          <button className="btn col-3" onClick={this.sendAnswer.bind(this, this.state.names[1])}>{this.state.names[1]}</button>
          <button className="btn col-3" onClick={this.sendAnswer.bind(this, this.state.names[2])}>{this.state.names[2]}</button>
          <button className="btn col-3" onClick={this.sendAnswer.bind(this, this.state.names[3])}>{this.state.names[3]}</button>
        </div>
      </div>
    );
  }
}
  
  export default QuizPanel;