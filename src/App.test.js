import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './setupTests';
// import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

describe('App component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
