import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../../Services/Api';
import {RANDOM_QUIZ} from '../../Services/ApiConfig';

export const fetchQuizzes = createAsyncThunk(
  'quizzes/fetchQuizzes',
  async (_, {rejectWithValue}) => {
    try {
      const response = await Api.getJSON(RANDOM_QUIZ);
      return response.data;
    } catch (error) {
      console.error('Error fetching quizzes', error);
      return rejectWithValue(error);
    }
  },
);
