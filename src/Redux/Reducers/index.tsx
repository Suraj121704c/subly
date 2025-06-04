import {combineReducers} from '@reduxjs/toolkit';

//user-define Import files
import loginReducer from './loginReducer';
import loadingReducer from './loadingSlice';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  loadingReducer: loadingReducer,
  profileReducer: profileReducer,
});

export default rootReducer;
