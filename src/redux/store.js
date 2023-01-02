import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, 
    persistReducer,  
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import bukovynaReducer from "./bukovyna/bukovyna-reducer";
import centralnaReducer from "./centralna/centralna-reducer";
import hutsulshchynaReducer from "./hutsulshchyna/hutsulshchyna-reducer";
import opillyaReducer from "./opillya/opillya-reducer";
import volynReducer from "./volyn/volyn-reducer";
import zakarpattyaReducer from "./zakarpattya/zakarpattya-reducer";
import sliderReducer from './slider/slider-reducer';
import podillyaReducer from './podillya/podillya-reducer';
import svitReducer from './svit/svit-reducer';
import savedReducer from './saved/saved-reducer';
import storage from 'redux-persist/lib/storage';
import golovniUboryReducer from './golovni-ubory/golovni-reducer';
import vzuttyaReducer from './vzuttya/vzuttya-reducer';

const savedPersistConfig = {
    key: 'mysaved',
    storage,
  };

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
        golovniUbory: golovniUboryReducer,
        vzuttya: vzuttyaReducer,
        slider: sliderReducer,
        saved: persistReducer(savedPersistConfig, savedReducer)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development'
});

let persistor = persistStore(store);

export default {
    store,
    persistor
};