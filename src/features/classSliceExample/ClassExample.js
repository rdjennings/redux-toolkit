import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';

import { classDecrement, classIncrement } from './classSlice';
class ClassExample extends Component {
	render() {
		const incrementCount = () => {
			this.props.classIncrement();
		};
		const decrementCount = () => {
			this.props.classDecrement();
		};
		const count = this.props.count;
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
	const count = state.classCounter.value;
	return { count };
};

const mapDispatchToProps = (dispatch) => {
	return {
		classIncrement: () => dispatch(classIncrement()),
		classDecrement: () => dispatch(classDecrement()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassExample);
