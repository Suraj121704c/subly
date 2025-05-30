//user-defined import files
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../../Services/Api';
import {VERSE_OF_THE_DAY_URL} from '../../Services/ApiConfig';

export const getVerseOfTheDayAction = createAsyncThunk(
  'getVerseOfTheDayAction',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      const response = await Api.getJSON(VERSE_OF_THE_DAY_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching data', error);
      return null;
    }
  },
);
