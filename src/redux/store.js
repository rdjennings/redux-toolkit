import { configureStore } from '@reduxjs/toolkit';
import classCounterReducer from '../features/classSliceExample/classSlice';
import functionCounterReducer from '../features/functionSliceExample/functionSlice';
import utilityReducers from '../features/utilitySlice';

export default configureStore({
	reducer: {
		classCounter: classCounterReducer,
		functionCounter: functionCounterReducer,
		utilities: utilityReducers,
	},
});
