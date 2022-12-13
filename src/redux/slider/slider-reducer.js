import { createReducer } from '@reduxjs/toolkit';
import actions from './slider-actions';

const slider = createReducer(false, builder => {
    builder.addCase(actions.sliderToggle, (state, action) => {
        if(state === false) {
            state = true;
        } else {
            state = false;
        };
        return state;
    }) 
});

export default slider;
