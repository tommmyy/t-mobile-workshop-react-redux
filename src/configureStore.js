import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducer from './reducers';

const configureStore = (initialState) => {
	return createStore(reducer, initialState, compose(applyMiddleware(thunk)));
};

export default configureStore;
