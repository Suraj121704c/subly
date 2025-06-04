import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {Api} from '../../Services/Api';
import {errorMessage} from '../../Helper/toast';
import {profileURL} from '../../Services/ApiConfig';

export const profileAction = createAsyncThunk(
  'profileAction',
  async (data, {dispatch, rejectWithValue}) => {
    try {
      const response = await Api.getJSON(profileURL);
      if (response?.data?.status == 'success') {
        return response?.data?.data;
      } else {
        errorMessage(response.data.message);
      }
    } catch (error: any) {
      console.log('Profile Error: ', error);
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
