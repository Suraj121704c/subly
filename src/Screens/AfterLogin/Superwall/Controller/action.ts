//user-define Import files
import {supabase} from '../../../../Client/superbase';

import {createAsyncThunk} from '@reduxjs/toolkit';

export const superwallStatusAction = createAsyncThunk(
  'superwallStatusAction',
  async (userId: string) => {
    try {
      const {data, error} = await supabase
        .from('payment')
        .select('*')
        .eq('user_id', userId)
        .single();
      if (error) throw error;
      console.log(data, 'data');
      console.log(error, 'error');
      return data;
    } catch (error) {
      console.error('Error fetching superwall status:', error);
      return null;
    }
  },
);
