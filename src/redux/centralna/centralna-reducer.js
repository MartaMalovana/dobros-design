import { createReducer } from '@reduxjs/toolkit';
import actions from './centralna-actions';
import data from '../../json/centralna.json';

const centralna = createReducer(data, builder => {
    builder.addCase(actions.centralnaChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default centralna;
