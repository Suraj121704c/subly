import * as Storage from '../../Services/AsyncStoreConfig';

//user-define Import files
import {createAsyncThunk} from '@reduxjs/toolkit';
import {profileAction} from './profileAction';
import {attachTokenToRequest} from '../../Services/axiosService';

export const authenticationAction = createAsyncThunk(
  'authenticationAction',
  async (params, {dispatch}: any) => {
    const isLoginUser = await Storage.getData('accessToken');
    if (isLoginUser) {
      attachTokenToRequest(isLoginUser);
      dispatch(profileAction());
      return isLoginUser;
    } else {
      return false;
    }
  },
);
