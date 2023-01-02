import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './saved-actions';

const saved = createReducer([], builder => {
    builder.addCase(actions.savedAdd, (state, {payload}) => {
        console.log(state);
        if(!state.find(el => el.id === payload.id)) state.push(payload); 
        return state;
    });
    builder.addCase(actions.savedDelete, (state, {payload}) => {
        const selectedItem = state.find(el => el.id === payload.id);
        const index = state.indexOf(selectedItem);
        state.splice(index, 1);
        return state;
    })
});

export default combineReducers({
    saved
});
