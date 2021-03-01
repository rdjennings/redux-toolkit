import { createSlice } from '@reduxjs/toolkit';

export const funcCounterSlice = createSlice({
	name: 'funcCounter',
	initialState: {
		value: 0,
	},
	reducers: {
		funcIncrement: (state) => {
			state.value += 1;
		},
		funcsDecrement: (state) => {
			state.value -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { funcsDecrement, funcIncrement } = funcCounterSlice.actions;

export default funcCounterSlice.reducer;
