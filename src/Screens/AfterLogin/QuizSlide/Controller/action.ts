import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {showLoader, hideLoader} from '../../../../Redux/Reducers/loadingSlice';
import {Api} from '../../../../Services/Api';
import {successMessage} from '../../../../Helper/toast';
import {QUESTION_ANSWER_URL} from '../../../../Services/ApiConfig';

export const questionAnswerAction = createAsyncThunk(
  'questionAnswerAction',
  async (params: any, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      console.log('params', JSON.stringify(params));
      const response = await Api.postJSON(QUESTION_ANSWER_URL, params);
      console.log('response', JSON.stringify(response));
      if (response?.data?.success) {
        successMessage('One time code is verified');
        params?.callBack(response?.data);
      }
      dispatch(hideLoader());
    } catch (error: any) {
      dispatch(hideLoader());
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
