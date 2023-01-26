import { createReducer } from '@reduxjs/toolkit';
import actions from './kozhuhy-actions';
import data from '../../json/kozhuhy.json';

const kozhuhy = createReducer(data, builder => {
    builder.addCase(actions.kozhuhyChangeSaved, (state, {payload}) => {
            const element = state.find(el => el.id === payload);
            if(element.saved === 'false') {
                element.saved = 'true';
            } else {
                element.saved = 'false';
            };
    })
});

export default kozhuhy;
