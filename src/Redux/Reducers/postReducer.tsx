// reducers/postsSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {getVerseOfTheDayAction} from '../Actions/postsActions';

const initialState = {
  posts: [],
  loading: false,
  isError: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVerseOfTheDayAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getVerseOfTheDayAction.fulfilled, (state: any, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getVerseOfTheDayAction.rejected, (state: any, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default postsSlice.reducer;
