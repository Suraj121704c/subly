//user-define Import files
import {attachTokenToRequest} from '../../../../Services/axiosService';
import * as Storage from '../../../../Services/AsyncStoreConfig';

import {createAsyncThunk} from '@reduxjs/toolkit';

export const loginAction = createAsyncThunk(
  'loginAction',
  async (data: any) => {
    attachTokenToRequest(data.session.access_token);
    await Storage.saveData('accessToken', data.session.access_token);
    return 'accessToken';
  },
);
