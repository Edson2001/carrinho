import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import Container from '@Components/Container';
import Input from "@Components/Input"
import Button from '@Components/Button';
import {useRouter} from "expo-router"
import {supabase} from "../../../src/databases/supbase"


const login: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)

  async function login(){
    setLoading(true)
    const {error} = await supabase.auth.signInWithPassword({
      email:email,
      password: password
    })

    if(error){
      Alert.alert(error.message)
      setLoading(false)
      return 
    }
    router.push({pathname: "/home"})
  }
  return (
    <Container>
      <View className='flex-col justify-center items-center h-screen p-[30px] relative'  >
        <Text className='font-bold text-3xl'>Login</Text>
        <Text className='mb-[117px]'>Acessar conta</Text>
        
        <Input value={email} setText={setEmail} email={true}  label='Email' class='mb-[20px]' />
        <Input value={password} keyboardType='email-address' setText={setPassword} password={true} label='Senha' class='mb-[35px]'  />

        <Button handleFunction={()=>login()} text='Login' />
        {loading ? <ActivityIndicator className='absolute' color={"#000"} size="large" /> : <></>}
      </View>
    </Container>
  );
}

export default login;