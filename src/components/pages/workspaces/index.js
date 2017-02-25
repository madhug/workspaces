import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import deepEqual from 'deep-equal';
import {
    sortData, 
    addWorkspace,
    toggleFavorite,
} from '../../../reducers/workspaces.js';
import './workspaces.css';
import './dropdown.css';
import Table from '../../shared/table';

const ico_newworkspace = `${process.env.PUBLIC_URL}/images/svg/ico_newworkspace.svg`;

function mapStoreToProps(store) {
    return { 
        workspaceData: store.workspaces.workspaceData,
        selectedSortField: store.workspaces.selectedSortField,
        showComingSoon: store.workspaces.showComingSoon, 
        tableHeaders: store.workspaces.tableHeaders,
        sortFields: store.workspaces.sortFields
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onSortFieldSelect: (field) => { dispatch(sortData(field)) },
        onFavorite: (uid) => { dispatch(toggleFavorite(uid)) }
    }
}

function shouldComponentUpdate(nextProps, nextState) {
    return !deepEqual(this.state.props, nextState.props);
}


class Workspaces extends Component {
  static propTypes = {
    tableHeaders: PropTypes.arrayOf(PropTypes.string),
    workspaceData: PropTypes.arrayOf(PropTypes.object(
        PropTypes.shape: {
        uid: PropTypes.string, 
        name: PropTypes.string, 
        owner: PropTypes.string, 
        isFavorite: PropTypes.bool,
        isPublic: PropTypes.bool,
        modified: PropTypes.string
        }
    )),
    selectedSortField: PropTypes.object(
        PropTypes.shape: {
            value: PropTypes.string,
            label: PropTypes.string,
        }
    ),
    sortFields: PropTypes.arrayOf(
        PropTypes.object(
            PropTypes.shape: {
                value: PropTypes.string,
                label: PropTypes.string,
            }
        )
    ),
    onSortFieldSelect: PropTypes.func,
    onFavorite: PropTypes.func
  }

  render() {
    const { workspaceData, selectedSortField, 
        sortFields, tableHeaders, onFavorite } = this.props;
    return (
      <div className="page-container">
        <div className="workspaces-container">
            <div className="header">
                <p className="page-header-text">Workspaces</p>
            </div>
            <div className="actions">
                <div className="sort">
                    <p className="label">Sort By</p>
                    <Dropdown 
                        options={sortFields} 
                        value={selectedSortField} 
                        placeholder="Select" />
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
                    onFavorite={onFavorite}
                />
            </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Workspaces);
