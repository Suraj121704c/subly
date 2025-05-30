//user-define Import files
import * as Storage from '../../../../Services/AsyncStoreConfig';

import {createAsyncThunk} from '@reduxjs/toolkit';

export const loginAction = createAsyncThunk(
  'loginAction',
  async (data: any) => {
    await Storage.saveData('accessToken', data.session.access_token);
    return 'accessToken';
  },
);
