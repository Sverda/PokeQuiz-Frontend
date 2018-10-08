import React, { Component } from 'react';

const stylee = {
  navPanel: {
    borderRadius: "15%",
    width: "300px",
    height: "300px"
  },

  cell: {
    width: 100,
    height: 100
  },

  button: {
    width: 100,
    height: 100
  }
};

class NavPanel extends Component {
    render() {
      return (
        <div className="container bg-primary m-4" style={stylee.navPanel}>
            <p className="m-1">NavPanel</p>

            <div className="row">
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn" style={stylee.button}>Row 1, Col 1</button>
              </div>
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn" style={stylee.button}>Row 1, Col 2</button>
              </div>
            </div>

            <div className="row">
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn" style={stylee.button}>Row 2, Col 1</button>
              </div>
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn" style={stylee.button}>Row 2, Col 2</button>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default NavPanel;