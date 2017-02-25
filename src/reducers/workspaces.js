import data from '../../data/workspaces.json';

export default function workspaces(state=data, action={}) {
    switch(action.type) {
        default: return state;
    }
}