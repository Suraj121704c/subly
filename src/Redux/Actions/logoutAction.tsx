//user-define Import files
import * as Storage from '../../Services/AsyncStoreConfig';
import {supabase} from '../../Client/superbase';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const logOutAction = createAsyncThunk('logOutAction', async () => {
  try {
    const pyar = await supabase.auth.signOut();
    if (pyar) {
      await Storage.removeData('accessToken');
      await Storage.removeData('step');
      await Storage.removeData('faithProgress');
      await Storage.removeData('slideQuide');
      await Storage.removeData('imageSlider');
      await Storage.removeData('intoScreen');
      await Storage.removeData('graph');
      await Storage.removeData('animatedCouple');
      await Storage.removeData('onboarding_progress');
      await Storage.removeData('intro_carousel_progress');
      await Storage.removeData('image_slider_progress');
      await Storage.removeData('quiz_slide_progress');
    }
    return null;
  } catch (error) {
    console.log('error', error);
  }
});
