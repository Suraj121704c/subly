import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {showLoader, hideLoader} from '../../../../Redux/Reducers/loadingSlice';
import {Api} from '../../../../Services/Api';
import {successMessage} from '../../../../Helper/toast';
import {Preference_URL} from '../../../../Services/ApiConfig';

export const preferenceAction = createAsyncThunk(
  'preferenceAction',
  async (params: any, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      const payload = {
        daily_duration: 120,
        listening_experience: 'natural_sounds',
        subliminals_schedule: 'afternoons',
      };
      console.log('params', JSON.stringify(params));
      const response = await Api.postJSON(Preference_URL, payload);
      console.log('response', JSON.stringify(response));
      //   if (response?.data?.success) {
      //     successMessage('One time code is verified');
      //     params?.callBack(response?.data);
      //   }
      dispatch(hideLoader());
    } catch (error: any) {
      dispatch(hideLoader());
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
