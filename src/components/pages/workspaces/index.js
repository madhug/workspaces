import React, { Component } from 'react';
import './workspaces.css';

class Workspaces extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="workspaces-container">
            <div className="header">
                Workspaces
            </div>
            <div className="actions"></div>
            <div className="list"></div>
        </div>
      </div>
    );
  }
}

export default Workspaces;
