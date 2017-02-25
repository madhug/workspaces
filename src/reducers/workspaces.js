import data from '../../data/workspaces.json';

export const SORT_DATA = 'SORT_DATA';
export const ADD_WORKSPACE = 'ADD_WORKSPACE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


const intialState = () => {
    return {
        sortField: null,
        showComingSoon: false, 
        ...data
    }
} 

function handleSortData(state, action) {
    return state;
}

function handleAddWorkspace(state, action) {
    return state;
}

function handleAddFavorite(state, action) {
    return state;
}

function handleRemoveFavorite(state, action) {
    return state;
}

export default function workspaces(state=intialState(), action={}) {
    switch(action.type) {
        case SORT_DATA:
            return handleSortData(state, action);
        case ADD_WORKSPACE:
            return handleAddWorkspace(state, action);
        case ADD_FAVORITE:
            return handleAddFavorite(state, action);
        case REMOVE_FAVORITE:
            return handleRemoveFavorite(state, action);
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

export function addFavorite(id) {
    return {
        type: ADD_FAVORITE,
        id
    }
}

export function removeFavorite(id) {
    return {
        type: REMOVE_FAVORITE,
        id
    }
}