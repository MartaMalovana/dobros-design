import { createReducer } from '@reduxjs/toolkit';
import actions from './rushnyky-actions';
import data from '../../json/rushnyky.json';

const rushnyky = createReducer(data, builder => {
    builder.addCase(actions.rushnykyChangeSaved, (state, {payload}) => {
            const element = state.find(el => el.id === payload);
            if(element.saved === 'false') {
                element.saved = 'true';
            } else {
                element.saved = 'false';
            };
    })
});

export default rushnyky;
