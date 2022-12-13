import { createReducer } from '@reduxjs/toolkit';
import actions from './svit-actions';
import data from '../../json/svit.json';

const svit = createReducer(data, builder => {
    builder.addCase(actions.svitChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default svit;
