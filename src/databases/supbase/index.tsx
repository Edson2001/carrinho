import 'react-native-url-polyfill/auto';

import * as SecureStore from "expo-secure-store";
import { createClient } from '@supabase/supabase-js'


const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const YOUR_REACT_NATIVE_SUPABASE_URL = "https://glzfsrgqmohtubkfxaww.supabase.co"
const YOUR_REACT_NATIVE_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsemZzcmdxbW9odHVia2Z4YXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzNTk4MDMsImV4cCI6MTk4MTkzNTgwM30.SLf_VxKXIFpOsLihhN3NCPMUr-0yq0PxBMg3eowdGKM"

const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL
const supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

