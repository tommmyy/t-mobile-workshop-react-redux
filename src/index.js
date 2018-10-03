import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import Counter from './Counter';
import { increment, decrement } from './actions';

const store = configureStore();

const rerender = () =>
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch(increment())}
			onDecrement={() => store.dispatch(decrement())}
		/>,
		document.getElementById('root')
	);

store.subscribe(rerender);

rerender();
