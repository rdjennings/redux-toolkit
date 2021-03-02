import { createSlice } from '@reduxjs/toolkit';

export const classCounterSlice = createSlice({
	name: 'classCounter',
	initialState: {
		count: 0,
	},
	reducers: {
		classIncrement: (state) => {
			state.count += 1;
		},
		classDecrement: (state) => {
			state.count -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
const { actions, reducer } = classCounterSlice;
export const { classDecrement, classIncrement } = actions;

export default reducer;
