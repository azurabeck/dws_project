import { combineReducers } from '@reduxjs/toolkit';

//All reducers modules import bellow
import bandsReducer from './bandsSlice';

const rootReducer = combineReducers({
  bands: bandsReducer
});

export default rootReducer;