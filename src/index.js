import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
	palette: {
		common: {
			black: '#000',
			white: '#fff'
		},
		background: {
			paper: '#fff',
			'default': '#fafafa'
		},
		primary: {
			main: 'rgba(33, 81, 132, 1)',
			contrastText: 'rgba(255, 255, 255, 1)'
		},
		error: {
			main: '#f44336',
			contrastText: '#fff'
		},
		text: {
			primary: 'rgba(84, 84, 84, 1)',
		}
	}
});
ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
