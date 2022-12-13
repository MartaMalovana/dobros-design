import { createReducer } from '@reduxjs/toolkit';
import actions from './volyn-actions';
import data from '../../json/volyn.json';

const volyn = createReducer(data, builder => {
    builder.addCase(actions.volynChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default volyn;
