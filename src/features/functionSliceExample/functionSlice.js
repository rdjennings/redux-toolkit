import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const simAsyncRequest = createAsyncThunk(
	'funcCounter/simAsyncRequest',
	async (_, { dispatch }) => {
		dispatch(setLoading());
		const delay = () => new Promise((res) => setTimeout(res, 1000));
		await delay();
		debugger;
		dispatch(funcIncrement());
	}
);

export const funcCounterSlice = createSlice({
	name: 'funcCounter',
	initialState: {
		value: 0,
		loading: false,
	},
	reducers: {
		funcIncrement: (state) => {
			state.value += 1;
			state.loading = true;
		},
		funcDecrement: (state) => {
			state.value -= 1;
		},
		setLoading: (state) => {
			state.loading = !state.loading;
		},
	},
	extraReducers: {
		[simAsyncRequest.fulfilled]: (state) => {
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
const { actions, reducer } = funcCounterSlice;
export const { funcDecrement, funcIncrement, setLoading } = actions;

export default reducer;
