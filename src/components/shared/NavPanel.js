import React, { Component } from 'react';

const stylee = {
  navPanel: {
    borderRadius: "15%",
    width: "250px",
    height: "250px"
  },

  cell: {
    borderRadius: "15%",
    width: 80,
    height: 80
  },

  button: {
    width: 80,
    height: 80
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