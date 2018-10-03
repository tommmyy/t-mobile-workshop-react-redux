import React from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => (
	<div>
		<h2>{value}</h2>

		<button onClick={onIncrement}>
			<span role="img" aria-label="plus">➕</span>
		</button>
		<button onClick={onDecrement}>
			<span role="img" aria-label="minus">➖</span>
		</button>
	</div>
);

export default Counter;
