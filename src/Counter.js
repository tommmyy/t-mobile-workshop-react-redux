import React from 'react';

const Counter = ({ value, onIncrement }) => (
	<div>
		<h2>{value}</h2>

		<button onClick={onIncrement}>
			<span role="img" aria-label="plus">➕</span>
		</button>
	</div>
);

export default Counter;
