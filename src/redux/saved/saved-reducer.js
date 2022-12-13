import { createReducer } from '@reduxjs/toolkit';
import actions from './saved-actions';

const saved = createReducer([], {
    [actions.savedAdd]: (state, {payload}) => {
        state.push(payload);
        return state;
    }
});

export default saved;
