import React, { useEffect } from 'react';
import { View, Pressable, Text, TouchableOpacity } from 'react-native';
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
  async function signOut(){
    const {error} = await  supabase.auth.signOut()
    if(!error) router.push("/login")
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

  const {user, getUser} = useUserStore((state)=> state)
  
  useEffect(()=>{
    getUser()
    console.log(user?.email, 'state')
  }, [])

  return (
    <View className={`flex-row  justify-between items-center  w-full p-[20px] z-50 relative ${myClass}`}>
        {back ? <Back  /> : <Menu /> }
        <View>
          <Text>{user?.email} </Text>
        </View>
    </View>
  );
}

export default Header;