import React, { useEffect, useState } from 'react';
import { Slot, usePathname, useRouter } from 'expo-router';
import { Session } from '@supabase/supabase-js';
import { session as mySession } from '@src/databases/supbase/session';
import { supabase } from '@src/databases/supbase';

const app: React.FC = () => {
  
  const [session, setSession] = useState<Session | null>()
  const routerName = usePathname()
  const router = useRouter()
  
  useEffect(()=>{

    mySession().then(data=>{
      setSession(data)
    })
    
    supabase.auth.onAuthStateChange((_event, session)=>{
      setSession(session)
    })
    

    if(routerName == '/login' && session && session!.user) router.push("/home")
  }, [routerName])

  return <Slot />;
}

export default app;