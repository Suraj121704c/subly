import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {GET_PLAN_DETAILS_URL} from '../../Services/ApiConfig';
import {Api} from '../../Services/Api';
import {hideLoader, showLoader} from '../Reducers/loadingSlice';

export const getPlanDetailsAction = createAsyncThunk(
  'getPlanDetailsAction',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      const response = await Api.getJSON(GET_PLAN_DETAILS_URL);
      dispatch(hideLoader());
      return response.data;
    } catch (error) {
      console.error('Error fetching data', error);
      return null;
    }
  },
);
