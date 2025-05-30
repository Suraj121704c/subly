//user-define Import files
import * as Storage from '../../Services/AsyncStoreConfig';

import {createAsyncThunk} from '@reduxjs/toolkit';

export const authenticationAction = createAsyncThunk(
  'authenticationAction',
  async () => {
    const isLoginUser = await Storage.getData('accessToken');
    console.log('isLoginUser', isLoginUser);
    if (isLoginUser) {
      return isLoginUser;
    } else {
      return false;
    }
  },
);
