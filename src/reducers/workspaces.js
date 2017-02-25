import data from '../../data/workspaces.json';
import constants from '../../data/constants.json';

export const SORT_DATA = 'SORT_DATA';
export const ADD_WORKSPACE = 'ADD_WORKSPACE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const intialState = () => {
    const transformedData = data.map( d => {
        return {
            uid: d.uid,
            name: d.name.toLowerCase(),
            owner: `${d.workspace_owner.first_name.toLowerCase()} ${d.workspace_owner.last_name.toLowerCase()}`,
            isFavorite: d.favorite > 0,
            isPublic: d.public,
            modified: d.updated_at
        }
    })
    return {
        worksspaceData: transformedData,
        selectedSortField: {value: 'favorite', label: 'Favorites'},
        sortFields: constants.sortFields,
        tableHeaders: constants.tableHeaders,
        showComingSoon: false, 
    }
} 

function handleSortData(state, action) {
    return state;
}

function handleAddWorkspace(state, action) {
    return state;
}

function handleToggleFavorite(state, action) {

    return state;
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
