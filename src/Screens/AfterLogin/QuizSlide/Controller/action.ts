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
      console.log("Params:====",JSON.stringify(params))
      // const payload = {
      //   acheivement: ['glow_up', 'wealth_success'],
      //   experience: 'regular',
      //   listening_time: ['sleeping', 'meditation'],
      //   thought_struggles: ['doubt_change', 'impatience'],
      //   subconscious_resistence: ['doubt_effectiveness', 'forget'],
      // };
      // console.log('params', JSON.stringify(params));
      // const response = await Api.postJSON(QUESTION_ANSWER_URL, payload);
      // console.log('response', JSON.stringify(response));
      dispatch(hideLoader());
    } catch (error: any) {
      dispatch(hideLoader());
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
