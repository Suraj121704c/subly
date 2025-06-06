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
      const response = await Api.postJSON(Preference_URL, params);
      if(response?.status ==200){
        successMessage("Your preferences have been saved")
      }
      dispatch(hideLoader());
    } catch (error: any) {
      dispatch(hideLoader());
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
