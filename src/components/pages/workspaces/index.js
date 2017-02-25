import React, { Component } from 'react';
import './workspaces.css';

const ico_newworkspace = `${process.env.PUBLIC_URL}/images/svg/ico_newworkspace.svg`;
class Workspaces extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="workspaces-container">
            <div className="header">
                <p className="page-header-text">Workspaces</p>
            </div>
            <div className="actions">
                <div className="sort">
                    <p className="label">Sort By</p>
                    <div>Favorites</div>
                </div>
                <button className="icon-button">
                    <p className='icon-button-label label'>New Workspace</p>
                    <img className="icon" src={ico_newworkspace}></img>
                </button>
            </div>
            <div className="list"></div>
        </div>
      </div>
    );
  }
}

export default Workspaces;
