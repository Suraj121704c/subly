import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {showLoader, hideLoader} from '../../../../Redux/Reducers/loadingSlice';
import {Api} from '../../../../Services/Api';
import {GET_BOOKLISTING_URL} from '../../../../Services/ApiConfig';

export const getBooksAction = createAsyncThunk(
  'getBooksAction',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      const response = await Api.getJSON(GET_BOOKLISTING_URL);
      dispatch(hideLoader());
      if (response?.status == 200) return response.data;
      else return rejectWithValue('Something went wrong!');
    } catch (error) {
      console.error('Error fetching data', error);
      return null;
    }
  },
);
