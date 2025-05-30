import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {Api} from '../../../../Services/Api';
import {
  SET_STEP_COUNT,
  UPDATE_STEP_COUNT,
} from '../../../../Services/ApiConfig';
import {hideLoader, showLoader} from '../../../../Redux/Reducers/loadingSlice';

export const stepCountAction = createAsyncThunk(
  'stepCountAction',
  async (userId: string) => {
    try {
      const response = await Api.getJSON(`${SET_STEP_COUNT}/${userId}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },
);

export const updateStepCountAction = createAsyncThunk(
  'updateStepCountAction',
  async (data: any, {dispatch}) => {
    try {
      dispatch(showLoader());
      const response = await Api.postJSON(UPDATE_STEP_COUNT, data);
      dispatch(hideLoader());
      return response.data;
    } catch (error) {
      console.error('Error fetching data', JSON.stringify(error));
      return null;
    }
  },
);
