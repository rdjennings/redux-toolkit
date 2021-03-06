import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { funcDecrement, simAsyncRequest } from './functionSlice';
import classnames from 'classnames';

const FunctionExample = () => {
	const count = useSelector((state) => {
		return state.functionCounter.count;
	});
	const isLoading = useSelector((state) => state.utilities.loading);

	const dispatch = useDispatch();
	const increment = () => {
		dispatch(simAsyncRequest());
	};
	const decrement = () => {
		dispatch(funcDecrement());
	};
	return (
		<div className="wrapper">
			<div>Function Count: {count}</div>
			<div>
				<button
					className={classnames({ busy: isLoading })}
					disabled={isLoading}
					onClick={increment}
				>
					Increment Functions Counter
				</button>
				<button onClick={decrement}>Decrement Functions Counter</button>
			</div>
		</div>
	);
};

export default FunctionExample;
