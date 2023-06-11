/* eslint-disable import/prefer-default-export */
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line import/no-unresolved
import { SUPABASE_URL, SUPABASE_PUBLIC_KEY } from '@env';

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});

export { supabase };
