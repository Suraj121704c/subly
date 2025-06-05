//user-define Import files
import { attachTokenToRequest } from '../../Services/axiosService';
import * as Storage from '../../Services/AsyncStoreConfig';

import {createAsyncThunk} from '@reduxjs/toolkit';

export const authenticationAction = createAsyncThunk(
  'authenticationAction',
  async () => {
    const isLoginUser = await Storage.getData('accessToken');
    // await Storage.clear();
    // Storage.removeData("quiz_slide_progress");
    // Storage.removeData("last_viewed_quiz");
    // Storage.removeData("slideQuide");
    if (isLoginUser) {
      console.log('isLoginUser', isLoginUser);
      attachTokenToRequest(isLoginUser);
      return isLoginUser;
    } else {
      return false;
    }
  },
);
