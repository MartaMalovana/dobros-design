import { createReducer } from '@reduxjs/toolkit';
import actions from './golovni-actions';
import data from '../../json/golovni-ubory.json';

const golovniUbory = createReducer(data, builder => {
    builder.addCase(actions.golovniChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default golovniUbory;
