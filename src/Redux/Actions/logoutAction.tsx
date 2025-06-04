import {createAsyncThunk} from '@reduxjs/toolkit';

//user-define Import files
import * as Storage from '../../Services/AsyncStoreConfig';
import {hideLoader, showLoader} from '../Reducers/loadingSlice';
import {Api} from '../../Services/Api';
import {logOutURL} from '../../Services/ApiConfig';
import {errorMessage} from '../../Helper/toast';
import {resetProfile} from '../Reducers/profileReducer';

export const logOutAction = createAsyncThunk(
  'logOutAction',
  async (data, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      const response = await Api.postJSON(logOutURL);
      dispatch(hideLoader());
      if (response?.data?.status == 'success') {
        await Storage.removeData('accessToken');
        dispatch(resetProfile());
        return null;
      } else {
        errorMessage(response.data.message);
        return rejectWithValue(response?.data?.message);
      }
    } catch (error: any) {
      dispatch(hideLoader());
      console.log('logOut Error: ', error);
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);

export const unAuthorizedAction = createAsyncThunk(
  'unAuthorizedAction',
  async (data, {dispatch}) => {
    try {
      dispatch(showLoader());
      dispatch(hideLoader());
      dispatch(resetProfile());
      await Storage.removeData('accessToken');
      return null;
    } catch (error: any) {
      dispatch(hideLoader());
      console.log('logOut Error: ', error);
    }
  },
);
