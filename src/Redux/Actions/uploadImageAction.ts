import {createAsyncThunk} from '@reduxjs/toolkit';

//user-defined import files
import {hideLoader, showLoader} from '../Reducers/loadingSlice';
import {Api} from '../../Services/Api';
import {uploadImageURL} from '../../Services/ApiConfig';
import {errorMessage} from '../../Helper/toast';

export const uploadImageAction = createAsyncThunk(
  'uploadImageAction',
  async (params: any, {dispatch, rejectWithValue}) => {
    try {
      dispatch(showLoader());
      const response = await Api.postFormJSON(uploadImageURL, params?.form);
      dispatch(hideLoader());
      if (response?.data?.status == 'success') {
        params.callBack(response?.data?.data);
        return response?.data?.data;
      } else {
        errorMessage(response.data.message);
        return rejectWithValue(response?.data?.message);
      }
    } catch (error: any) {
      dispatch(hideLoader());
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
