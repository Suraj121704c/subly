import {createAsyncThunk} from '@reduxjs/toolkit';

// User-defined imports
import * as Storage from '../../../../Services/AsyncStoreConfig';
import {hideLoader, showLoader} from '../../../../Redux/Reducers/loadingSlice';
import {Api} from '../../../../Services/Api';
import {loginURL} from '../../../../Services/ApiConfig';
import {attachTokenToRequest} from '../../../../Services/axiosService';
import {profileAction} from '../../../../Redux/Actions/profileAction';
import {errorMessage, successMessage} from '../../../../Helper/toast';

interface loginParamsType {
  mobileNumber: string;
}

export const loginAction = createAsyncThunk(
  'loginAction',
  async (data: loginParamsType, {dispatch, rejectWithValue}) => {
    try {
      // dispatch(showLoader());
      Storage.saveData('accessToken', 'accessToken');
      return 'Token';
      // const {email, password, rememberMe} = data;
      // const fcmToken = await Storage.getData('fcmToken');
      // const params = {
      //   email: email,
      //   password: password,
      //   firebaseToken: fcmToken ?? '',
      // };
      // const response = await Api.postJSON(loginURL, params);
      // dispatch(hideLoader());
      // if (response?.data?.status == 'success') {
      //   attachTokenToRequest(response?.data?.data?.token);
      //   dispatch(profileAction());
      //   await Storage.saveData('accessToken', response?.data?.data?.token);
      //   if (rememberMe)
      //     await Storage.saveData('credential', JSON.stringify(data));
      //   else await Storage.removeData('credential');
      //   successMessage(response.data.message);
      //   return response?.data;
      // } else {
      //   errorMessage(response.data.message);
      //   return rejectWithValue(response.data.message);
      // }
    } catch (error: any) {
      dispatch(hideLoader());
      console.log('Login Error: ', error);
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
