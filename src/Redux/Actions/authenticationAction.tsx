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
    // Storage.removeData("step");
    // Storage.removeData("intro_carousel_progress");
    // Storage.removeData("couple_quiz_progress");
    // Storage.removeData("couple_last_viewed_quiz");

    if (isLoginUser) {
      console.log('isLoginUser', isLoginUser);
      attachTokenToRequest(isLoginUser);
      return isLoginUser;
    } else {
      return false;
    }
  },
);
