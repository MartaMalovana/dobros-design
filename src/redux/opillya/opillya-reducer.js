import { createReducer } from '@reduxjs/toolkit';
import actions from './opillya-actions';
import data from '../../json/opillya.json';

const opillya = createReducer(data, builder => {
    builder.addCase(actions.opillyaChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default opillya;
