import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLoading } from '../utilitySlice';

export const simAsyncRequest = createAsyncThunk(
	'funcCounter/simAsyncRequest',
	async (_, { dispatch }) => {
		dispatch(setLoading(true));
		const delay = () => new Promise((res) => setTimeout(res, 1000));
		await delay();
		dispatch(funcIncrement());
		dispatch(setLoading(false));
	}
);

export const funcCounterSlice = createSlice({
	name: 'funcCounter',
	initialState: {
		count: 0,
		loading: false,
	},
	reducers: {
		funcIncrement: (state) => {
			state.count += 1;
			state.loading = true;
		},
		funcDecrement: (state, action) => {
			state.count -= 1;
		},
	},
	extraReducers: {
		[simAsyncRequest.fulfilled]: (state) => {
			// do any followup work here (like other state updates)
		},
	},
});

// Action creators are generated for each case reducer function
const { actions, reducer } = funcCounterSlice;
export const { funcDecrement, funcIncrement } = actions;

export default reducer;
