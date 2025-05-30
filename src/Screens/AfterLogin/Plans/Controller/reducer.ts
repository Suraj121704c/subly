// reducers/postsSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {getBooksAction} from './action';

const initialState = {
  bookList: [],
  loading: false,
  isError: false,
};

const bookListingSlice = createSlice({
  name: 'bookListReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBooksAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getBooksAction.fulfilled, (state: any, action) => {
      state.loading = false;
      state.bookList = action.payload;
    });
    builder.addCase(getBooksAction.rejected, (state: any, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default bookListingSlice.reducer;
