//user-define Import files
import {supabase} from '../../../../Client/superbase';

import {createAsyncThunk} from '@reduxjs/toolkit';

export const currentUserAction = createAsyncThunk(
  'currentUserAction',
  async (userId: string) => {
    try {
      const {data, error} = await supabase
        .from('user_profile')
        .select('*')
        .eq('user_id', userId)
        .single();
      if (error) throw error;

      console.log(data, 'data');

      return data;
    } catch (error) {
      console.error('Error fetching data', error);
      return null;
    }
  },
);
