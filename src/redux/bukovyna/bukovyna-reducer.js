import { createReducer } from '@reduxjs/toolkit';
import actions from './bukovyna-actions';
import data from '../../json/bukovyna.json';

const bukovyna = createReducer(data, builder => {
    builder.addCase(actions.bukovynaChangeSaved, (state, {payload}) => {
            const element = state.find(el => el.id === payload);
            if(element.saved === 'false') {
                element.saved = 'true';
            } else {
                element.saved = 'false';
            };
    })
});

export default bukovyna;
