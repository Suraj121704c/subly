import {createAsyncThunk} from '@reduxjs/toolkit';
import {supabase} from '../../Client/superbase';

export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (_, {rejectWithValue}) => {
    try {
      const {
        data: {user},
        error,
      } = await supabase.auth.getUser();
      if (error) {
        return rejectWithValue(error.message);
      }
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
