import React from 'react';
import './App.css';
import { GlobalStyle } from './Styles/globalStyle';
import Router from './router';
import {Provider as MyProvider} from 'react-redux';
import store from "./store/store";

function App() {
  return (
    <MyProvider store={store}>
      <GlobalStyle/>
      <Router/>
    </MyProvider>
  );
}

export default App;
