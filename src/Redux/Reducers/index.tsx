import {combineReducers} from '@reduxjs/toolkit';

//user-define Import files
import postsReducer from './postReducer';
import loadingReducer from './loadingSlice';
import loginReducer from './loginReducer';
import quizReducer from './quizReducer';
import userProfileReducer from './userProfileReducer';
import plansReducer from './plansReducer';
import bookListReducer from '../../Screens/AfterLogin/Plans/Controller/reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  loadingReducer: loadingReducer,
  login: loginReducer,
  quizzes: quizReducer,
  userProfile: userProfileReducer,
  plans: plansReducer,
  bookListReducer: bookListReducer,
});

export default rootReducer;
