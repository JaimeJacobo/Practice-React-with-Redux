import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const myState = {
	searchField: '',
	robots: []
};

//REDUCER
const myStateReducer = (state = myState, action) => {
	if (action.type === 'SET_SEARCH_FIELD') {
		return {
			...state,
			searchField: action.event
		};
	} else if (action.type === 'SET_ROBOTS') {
		return {
			...state,
			robots: action.users
		};
	}
	return state;
};

//STORE
let mainStore = createStore(
	myStateReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={mainStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
