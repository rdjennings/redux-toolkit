import { createSlice } from '@reduxjs/toolkit';

export const utilitySlice = createSlice({
	name: 'utilities',
	initialState: {
		loading: false,
	},
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
const { actions, reducer } = utilitySlice;
export const { setLoading } = actions;

export default reducer;
