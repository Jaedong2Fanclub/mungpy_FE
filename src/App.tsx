import React from 'react';
import './App.css';
import { GlobalStyle } from './Styles/globalStyle';
import { MobileView } from 'react-device-detect';
import Router from './router';

function App() {
  return (
    <MobileView>
      <GlobalStyle/>
      <Router/>
    </MobileView>
  );
}

export default App;
