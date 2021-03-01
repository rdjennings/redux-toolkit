import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';

import { classDecrement, classIncrement } from './classSlice';
class ClassExample extends Component {
	render() {
		const incrementCount = () => {
			store.dispatch(classIncrement());
		};
		const decrementCount = () => {
			store.dispatch(classDecrement());
		};
		const count = this.props.classCounter.value;
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

const mapState = (state) => {
	return state;
};

const actionCreators = {
	classDecrement,
	classIncrement,
};

export default connect(mapState, actionCreators)(ClassExample);
