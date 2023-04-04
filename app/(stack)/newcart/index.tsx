import Button from '@Components/Button';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { View, Image, Text } from 'react-native';

const newcart: React.FC = () => {
  const router = useRouter()
  
  
  return (
    <View className='p-[20px] flex-col justify-center items-center h-full'>
        <View className='mb-[30px]'>
            <Text className='font-bold text-success text-3xl mb-3 text-center'>Continue assim</Text>
            <Text className='font-normal text-sm text-center'>Um novo carrinho foi aberto!</Text>
        </View>
        <Image className='mb-[30px]' source={require("@Images/Illustration.png")} />
        <Button handleFunction={()=> router.push("/home")} text='Ir ao painel principal' />
        
        
    </View>
  );
}

export default newcart;