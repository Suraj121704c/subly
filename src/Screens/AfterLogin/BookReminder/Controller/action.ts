import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {hideLoader, showLoader} from '../../../../Redux/Reducers/loadingSlice';
import {Api} from '../../../../Services/Api';
import {SET_REMINDER_URL} from '../../../../Services/ApiConfig';
import {errorMessage, successMessage} from '../../../../Helper/toast';

export const setReminderAction = createAsyncThunk(
  'setReminderAction',
  async (params: any, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      const response = await Api.postJSON(SET_REMINDER_URL, params);
      dispatch(hideLoader());
      if (response?.data.success) {
        params?.callBack();
        successMessage('Timer Added!');
      } else {
        errorMessage('Something went wrong!');
        return rejectWithValue(response.data);
      }
    } catch (error) {
      errorMessage('Something went wrong!');
      console.error('Error Timer', error);
      return null;
    }
  },
);
