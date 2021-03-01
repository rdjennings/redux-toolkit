import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
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
		funcIncrement: (state) => {
			state.value += 1;
		},
		funcsDecrement: (state) => {
			state.value -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	classDecrement,
	classIncrement,
	funcsDecrement,
	funcIncrement,
} = counterSlice.actions;

export default counterSlice.reducer;
