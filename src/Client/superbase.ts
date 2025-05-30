import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import {Database} from '../types/database.types';

const supabaseUrl = 'https://efkkblyrdfezlarixcwh.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma2tibHlyZGZlemxhcml4Y3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0Njg1OTUsImV4cCI6MjA1MzA0NDU5NX0.3SBhssrAp3O8jdMxBtWaFIlO6Hzg97o1B8DEgit8JNs';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
