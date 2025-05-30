import {createSlice} from '@reduxjs/toolkit';
import {getPlanDetailsAction} from '../Actions/plansActions';

interface PlansState {
  plans: any[];
  loading: boolean;
  error: string | null;
}

const initialState: PlansState = {
  plans: [],
  loading: false,
  error: null,
};

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPlanDetailsAction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlanDetailsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(getPlanDetailsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch plans';
      });
  },
});

export default plansSlice.reducer;
