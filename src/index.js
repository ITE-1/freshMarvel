import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/reset.scss'
import App from '../src/components/app/App';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
//////
const initialState = {
  menuIsOpen: false,
}
//////////
const reducer = (state = initialState, action) => {


  switch (action.type) {
      case "TOGGLE_MENU" :
          return {...state, menuIsOpen: !state.menuIsOpen}
     

      default:
          return state;
  }

}
///////////////
const store = createStore(reducer);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter >
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

