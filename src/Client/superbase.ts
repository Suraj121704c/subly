import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import {Database} from '../types/database.types';

const supabaseUrl = 'https://sfzvmxnfdvbmphummcck.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmenZteG5mZHZibXBodW1tY2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NjI1NzcsImV4cCI6MjA1OTQzODU3N30.2qBYTTSgIRUu2yCDsh5HVPos3sF7Y71LB5jmBDRhxKQ';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
