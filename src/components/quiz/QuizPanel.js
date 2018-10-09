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

class QuizPanel extends Component {
  constructor(){
    super();
    this.state = {
      sprite: "",
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
        <div className="container" style={stylee.spriteDiv}>
          <img src={"data:image/png;base64," + this.state.sprite} alt="sprite" className="img-fluid" style={stylee.img}/>
        </div>
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