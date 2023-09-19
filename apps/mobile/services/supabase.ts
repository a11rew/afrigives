import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// @ts-ignore
const { SUPABASE_URL, SUPABASE_PUBLIC_KEY } = Constants.manifest!.extra;

if (!SUPABASE_URL) throw new Error('Missing env.SUPABASE_URL');
if (!SUPABASE_PUBLIC_KEY) throw new Error('Missing env.SUPABASE_PUBLIC_KEY');

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});

export { supabase };
