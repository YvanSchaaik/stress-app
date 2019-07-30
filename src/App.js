import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import { ThemeProvider } from 'styled-components'
import StartPage from './components/StartPage.jsx';
import RedPill from './components/RedPill'
import BluePill from './components/BluePill'

const theme = {
  redPill: 'red',
  bluePill: 'blue',
  font: 'fantasy',
}

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
      <Route exact path="/" component={StartPage} />
      <Route exact path="/red" component={RedPill} />
      <Route exact path="/blue" component={BluePill} />
      </div>
    </ThemeProvider>
  );
}

export default App;
