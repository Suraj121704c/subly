import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {showLoader, hideLoader} from '../../../../Redux/Reducers/loadingSlice';
import {Api} from '../../../../Services/Api';
import {successMessage} from '../../../../Helper/toast';
import {CREATE_SUBLIMINAL_URL} from '../../../../Services/ApiConfig';

export const createSublimalAction = createAsyncThunk(
  'createSublimalAction',
  async (params: any, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      console.log('params', JSON.stringify(params));
      // const payload = {
      //   frequency: [100, 200],
      //   affirmation_volume: 0.5,
      //   speed: 2,
      //   silence_between: 1,
      //   stereo: 'both',
      // };
      const response = await Api.postJSON(CREATE_SUBLIMINAL_URL, params);
      console.log('response', JSON.stringify(response));
      dispatch(hideLoader());
    } catch (error: any) {
      dispatch(hideLoader());
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
