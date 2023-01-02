import { createReducer } from '@reduxjs/toolkit';
import actions from './vzuttya-actions';
import data from '../../json/vzuttya.json';

const vzuttya = createReducer(data, builder => {
    builder.addCase(actions.vzuttyaChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default vzuttya;
