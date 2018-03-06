import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <App/>
        </MuiThemeProvider>
    </BrowserRouter>
    , document.getElementById( 'root' ) );
registerServiceWorker();
