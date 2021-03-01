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
		funcDecrement: (state) => {
			state.value -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
const { actions, reducer } = funcCounterSlice;
export const { funcDecrement, funcIncrement } = actions;

export default reducer;
