import { createReducer } from '@reduxjs/toolkit';
import actions from './rizne-actions';
import data from '../../json/rizne.json';

const rizne = createReducer(data, builder => {
    builder.addCase(actions.rizneChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default rizne;
