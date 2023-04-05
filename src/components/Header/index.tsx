import React, { useEffect } from 'react';
import { View, Pressable, Text, Image, TouchableOpacity } from 'react-native';
import {Feather, FontAwesome} from "@expo/vector-icons"
import {  useRouter } from 'expo-router';
import { supabase } from '@src/databases/supbase';
import { useUserStore } from '@src/store/user';

interface Props{
  showTitle?: boolean,
  back?: boolean
  myClass?: string
}

const Menu = ()=>{
  const router = useRouter()
  function signOut(){
    supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <TouchableOpacity  onPress={()=> signOut()} > 
      <FontAwesome name='sign-out' size={20}   />
    </TouchableOpacity>
  )
}

const Back = ( )=>{
  const router = useRouter()
  return (
    <Pressable onPress={()=> router.back()}>
      <Feather color={"#5F77F5"} size={30} name='arrow-left' />
    </Pressable>
  )
}

const Header: React.FC<Props> = ({ back, showTitle, myClass}) => {

  const {state, getUser} = useUserStore((state)=> state)
  
  useEffect(()=>{
    getUser()
    console.log(state.user.email, 'state')
  }, [])

  return (
    <View className={`flex-row  justify-between items-center  w-full p-[20px] z-50 relative ${myClass}`}>
        {back ? <Back  /> : <Menu /> }
        <View>
          <Text>{state.user.email} </Text>
        </View>
    </View>
  );
}

export default Header;