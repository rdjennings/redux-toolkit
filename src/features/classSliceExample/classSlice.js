import { createSlice } from '@reduxjs/toolkit';

export const classCounterSlice = createSlice({
	name: 'classCounter',
	initialState: {
		value: 0,
	},
	reducers: {
		classIncrement: (state) => {
			state.value += 1;
		},
		classDecrement: (state) => {
			state.value -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { classDecrement, classIncrement } = classCounterSlice.actions;

export default classCounterSlice.reducer;
