import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import HashLoader from 'react-spinners/HashLoader';
import './i18n';

const override = {
  position: "absolute",
  top: "50%",
  left: "50%"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store.store}>
        <PersistGate persistor={store.persistor} loading={<HashLoader size={30} cssOverride={override}/>}>
          <BrowserRouter >
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
