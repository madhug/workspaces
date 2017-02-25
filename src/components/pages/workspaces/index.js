import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './workspaces.css';
import './dropdown.css';
import Table from '../../shared/table';

const ico_newworkspace = `${process.env.PUBLIC_URL}/images/svg/ico_newworkspace.svg`;

const tableHeaders = [
    'workspace name',
    'permission',
    'modified'
];

const workspaceData = [
    {
        uid: '1',
        name: 'Now this is what I call a long name and title',
        owner: 'Julie Tang',
        isFavorite: true,
        isPublic: true,
        modified: "2016-07-02T04:23:27.000Z"
    }, 
    {
        uid: '2',
        name: 'Cute Papillions',
        owner: 'julie tang',
        isFavorite: false,
        isPublic: false,
        modified: "2016-07-02T04:23:27.000Z"
    }, 
];

const sortFields = [
    {value: 'favorite', label: 'Favorites'},
    {value: 'name', label: 'Name'},
    {value: 'owner', label: 'Owner'},
    {value: 'modified', label: 'Modified'}
]


class Workspaces extends Component {
    // TODO: Add proptypes
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
                    <Dropdown options={sortFields} placeholder="Select" />
                 </div>
                <button className="icon-button">
                    <p className='icon-button-label label'>New Workspace</p>
                    <img className="icon" alt='add new workspace' src={ico_newworkspace}></img>
                </button>
            </div>
            <div className="table">
                <Table 
                    tableHeaders={tableHeaders}
                    workspaceData={workspaceData}
                    onFavorite={(uid) => {console.log(uid)}}
                />
            </div>
        </div>
      </div>
    );
  }
}

export default Workspaces;
