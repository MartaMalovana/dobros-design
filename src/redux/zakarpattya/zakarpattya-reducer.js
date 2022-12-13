import { createReducer } from '@reduxjs/toolkit';
import actions from './zakarpattya-actions';
import data from '../../json/zakarpattya.json';

const zakarpattya = createReducer(data, builder => {
    builder.addCase(actions.zakarpattyaChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default zakarpattya;
