import { configureStore } from "@reduxjs/toolkit";
import bukovynaReducer from "./bukovyna/bukovyna-reducer";
import centralnaReducer from "./centralna/centralna-reducer";
import hutsulshchynaReducer from "./hutsulshchyna/hutsulshchyna-reducer";
import opillyaReducer from "./opillya/opillya-reducer";
import volynReducer from "./volyn/volyn-reducer";
import zakarpattyaReducer from "./zakarpattya/zakarpattya-reducer";
import sliderReducer from './slider/slider-reducer';
import podillyaReducer from './podillya/podillya-reducer';
import svitReducer from './svit/svit-reducer';

const store = configureStore({
    reducer: {
        bukovyna: bukovynaReducer,
        centralna: centralnaReducer,
        hutsulshchyna: hutsulshchynaReducer,
        opillya: opillyaReducer,
        volyn: volynReducer,
        zakarpattya: zakarpattyaReducer,
        podillya: podillyaReducer,
        svit: svitReducer,
        slider: sliderReducer
    },
    devTools: process.env.NODE_ENV === 'development'
});

export default store;