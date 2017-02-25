import { findIndex, cloneDeep, orderBy } from 'lodash';

import data from '../../data/workspaces.json';
import constants from '../../data/constants.json';

export const SORT_DATA = 'SORT_DATA';
export const ADD_WORKSPACE = 'ADD_WORKSPACE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

function sortByField(data, field) {
    if(field.value !== 'name') {
        return orderBy(data, [field.value, 'name'], ['desc', 'asc']);
    } else {
        return orderBy(data, ['name'], ['asc']);
    }
}

const intialState = () => {
    const transformedData = data.map( d => {
        return {
            uid: d.uid,
            name: d.name.toLowerCase(),
            owner: `${d.workspace_owner.first_name.toLowerCase()} ${d.workspace_owner.last_name.toLowerCase()}`,
            isFavorite: !!d.favorite,
            isPublic: d.public,
            modified: d.updated_at
        }
    })
    return {
        workspaceData: transformedData,
        selectedSortField: constants.sortFields[0],
        sortFields: constants.sortFields,
        tableHeaders: constants.tableHeaders,
        showComingSoon: false, 
    }
} 

function handleSortData(state, action) {
    const newState = cloneDeep(state);
    newState.workspaceData = sortByField(newState.workspaceData, action.field); 
    newState.selectedSortField = action.field;
    return newState;
}

function handleAddWorkspace(state, action) {
    return state;
}

function handleToggleFavorite(state, action) {
    const newState = cloneDeep(state);
    const idx = findIndex(newState.workspaceData, (d) => {return d.uid === action.uid} );
    newState.workspaceData[idx].isFavorite = !newState.workspaceData[idx].isFavorite;
    return newState;
}

export default function workspaces(state=intialState(), action={}) {
    switch(action.type) {
        case SORT_DATA:
            return handleSortData(state, action);
        case ADD_WORKSPACE:
            return handleAddWorkspace(state, action);
        case TOGGLE_FAVORITE:
            return handleToggleFavorite(state, action);
        default: return state;
    }
}


export function sortData(field) {
    return {
        type: SORT_DATA,
        field
    }
}

export function addWorkspace() {
    return {
        type: ADD_WORKSPACE,
    }
}

export function toggleFavorite(uid) {
    return {
        type: TOGGLE_FAVORITE,
        uid
    }
}
