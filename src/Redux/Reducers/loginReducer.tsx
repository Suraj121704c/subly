import {createSlice} from '@reduxjs/toolkit';
import {authenticationAction} from '../Actions/authenticationAction';
import {logOutAction} from '../Actions/logoutAction';
import {loginAction} from '../../Screens/BeforeLogin/Login/Controller/action';

const initialState = {
  hideProgress: true,
  loading: false,
  loginData: null,
  isError: false,
};

const loginSlice = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state: any, action) => {
      state.loading = false;
      state.loginData = action.payload;
    });
    builder.addCase(loginAction.rejected, (state: any, action) => {
      state.loading = false;
      state.isError = true;
    });

    //Here we will handle Authentication
    builder.addCase(authenticationAction.fulfilled, (state: any, action) => {
      state.hideProgress = false;
      state.loginData = action.payload;
    });

    //Here we will handle logOut Action
    builder.addCase(logOutAction.fulfilled, (state: any, action) => {
      state.loginData = action.payload;
    });
    builder.addCase(logOutAction.rejected, (state: any, action) => {
      state.loginData = action.payload;
    });
  },
});

export default loginSlice.reducer;
