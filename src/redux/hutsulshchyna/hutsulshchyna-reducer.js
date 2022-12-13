import { createReducer } from '@reduxjs/toolkit';
import actions from './hutsulshchyna-actions';
import data from '../../json/hutsulshchyna.json';

const hutsulshchyna = createReducer(data, builder => {
    builder.addCase(actions.hutsulshchynaChangeSaved, (state, {payload}) => {
        const element = state.find(el => el.id === payload);
        if(element.saved === 'false') {
            element.saved = 'true';
        } else {
            element.saved = 'false';
        };
        return state;
    }) 
});

export default hutsulshchyna;
