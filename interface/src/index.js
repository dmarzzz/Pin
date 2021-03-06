import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddTrip from './components/addTrip';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//sets global theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

// main routing component
//currently routing is turned off but we render all the main components here
const routing = (
  <BrowserRouter >
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <NavBar />
      <App />
    </MuiThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
