import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
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
		funcIncrement: (state) => {
			state.count += 1;
		},
		funcsDecrement: (state) => {
			state.count -= 1;
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
