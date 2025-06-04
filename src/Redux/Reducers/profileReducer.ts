import {createSlice} from '@reduxjs/toolkit';

//user-defined import files
import {profileAction} from '../Actions/profileAction';

const initialState = {
  profileData: null,
  isError: false,
};

const profileSlice = createSlice({
  name: 'profileAction',
  initialState,
  reducers: {
    resetProfile: state => {
      console.log('Profile Data Reset Success');
      state.profileData = null;
      state.isError = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(profileAction.fulfilled, (state: any, action) => {
      state.profileData = action.payload;
    });
    builder.addCase(profileAction.rejected, (state: any, action) => {
      state.isError = true;
    });
  },
});

export const {resetProfile} = profileSlice.actions;
export default profileSlice.reducer;
