import React, { Component } from 'react';
import { connect } from 'react-redux';

import { classDecrement, classIncrement } from './classSlice';

class ClassExample extends Component {
	render() {
		const { count, decrement, increment } = this.props;

		const incrementCount = () => {
			increment();
		};

		const decrementCount = () => {
			decrement();
		};

		return (
			<div className="wrapper">
				<div>Classes Count: {count}</div>
				<div>
					<button onClick={incrementCount}>Increment Class Counter</button>
					<button onClick={decrementCount}>Decrement Class Counter</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const count = state.classCounter.count;
	return { count };
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(classIncrement()),
		decrement: () => dispatch(classDecrement()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassExample);
