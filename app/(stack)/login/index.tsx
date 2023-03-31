import React from 'react';
import { View, Text } from 'react-native';
import Container from '@Components/Container';
import Input from "@Components/Input"
import Button from '@Components/Button';
import {useRouter} from "expo-router"
const login: React.FC = () => {
  const router = useRouter()
  return (
    <Container>
      <View className='flex-col justify-center items-center h-screen p-[30px]' >
        <Text className='text-white font-bold text-3xl'>Login</Text>
        <Text className='text-textWhiteSecondary mb-[117px]'>Acessar conta</Text>
        
        <Input label='Email' class='mb-[20px]' />
        <Input label='Senha' class='mb-[35px]'  />

        <Button handleFunction={()=> router.push("/home")} text='Login' />
      </View>
    </Container>
  );
}

export default login;