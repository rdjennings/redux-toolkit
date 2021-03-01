import { configureStore } from '@reduxjs/toolkit';
import classCounterReducer from '../features/classSliceExample/classSlice';
import functionCounterReducer from '../features/functionSliceExample/functionSlice';

export default configureStore({
	reducer: {
		classCounter: classCounterReducer,
		functionCounter: functionCounterReducer,
	},
});
