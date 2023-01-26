import { createReducer } from '@reduxjs/toolkit';
import actions from './stylizovanaCentralna-actions';
import data from '../../json/stylizovanaCentralna.json';

const stylizovanaCentralna = createReducer(data, builder => {
    builder.addCase(actions.stylizovanaCentralnaChangeSaved, (state, {payload}) => {
            const element = state.find(el => el.id === payload);
            if(element.saved === 'false') {
                element.saved = 'true';
            } else {
                element.saved = 'false';
            };
    })
});

export default stylizovanaCentralna;
