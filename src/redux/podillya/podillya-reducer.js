import { createReducer } from '@reduxjs/toolkit';
import actions from './podillya-actions';
import data from '../../json/podillya.json';

const podillya = createReducer(data, builder => {
    builder.addCase(actions.podillyaChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default podillya;
