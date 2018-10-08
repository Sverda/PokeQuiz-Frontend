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
    height: 100,
    backgroundColor: "transparent"
  }
};

class NavPanel extends Component {
    render() {
      return (
        <div className="container bg-primary m-4" style={stylee.navPanel}>
            <p className="m-1">NavPanel</p>

            <div className="row">
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn btn-lg" style={stylee.button}>
                  <i className="fa fa-play fa-2x" />
                </button>
              </div>
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn" style={stylee.button}>
                  <i className="fa fa-address-card fa-2x" />
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn" style={stylee.button}>
                <i className="fa fa-arrow-left fa-2x"></i>
                </button>
              </div>
              <div className="col bg-secondary m-3" style={stylee.cell}>
                <button className="btn" style={stylee.button}>
                  <i className="fa fa-arrow-right fa-2x" />
                </button>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default NavPanel;