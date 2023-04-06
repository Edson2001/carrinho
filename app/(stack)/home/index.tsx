import Container from '@Components/Container';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Header from "@Components/Header"
import Activites from '@Components/Activites';
import Button from '@Components/Button';
import Card from '@Components/Card';
import {BottomSheet} from "react-native-btr"
import Input from '@Components/Input';
import { useCartStore } from '@src/store/cart';
import { useRouter } from 'expo-router';

const home: React.FC = () => {

  const [exchange, setExchange] = useState(null)
  const {setCart, loading, cart, openCart, isOpenBotomSheet, toggleBottomSheet} = useCartStore(state=> state)
  const [goal, setGoal] = useState(null)
  const router = useRouter()
  
  function newCart(){
    openCart({exchange, goal})
  }

  useEffect(()=>{
    setCart()
  },[])

  return (
    <Container >
      <>
        <Header back={false} showTitle={true} />
        <View className='p-[20px] flex-1 '>
          <Card class='rounded-[8px] mb-10 '>
            <View className='p-[30px]'>
              <Text className='font-semibold text-xl text-center mb-3'>4.000</Text>
              <Text className='text-center font-normal'>Lucro até agora</Text>
            </View>
          </Card>
          <View className='w-full flex-1'>
            <Text className='mb-3'>Abrir novo carrinho</Text>
            <Button  handleFunction={()=> toggleBottomSheet(true)} text='Novo carrinho ' class='rounded-[6px] mb-10' />
            <Activites data={cart}  />
            <BottomSheet visible={isOpenBotomSheet} onBackButtonPress={()=> toggleBottomSheet(false)}  onBackdropPress={()=> toggleBottomSheet(false)} >
              <View className='bg-white h-[360px] rounded-tl-[30px] rounded-tr-[30px] p-[30px] flex-col justify-between relative'>
                <Input class='mb-2' keyboardType='numeric' setText={setExchange} value={exchange} label='Câmbio' />
                <Input  keyboardType='numeric' setText={setGoal} value={goal} label='Meta. O carrinho vai ser fechado assim que o valor total for igual a meta.' />
                <Button handleFunction={()=> newCart()} text='Abrir carrinho' />
                {loading ? <ActivityIndicator  className='absolute  top-1/2 left-1/2' size={"large"} />  : <></>}
              </View>
            </BottomSheet>
          </View>
        </View>
      </>
    </Container>
  );
}

export default home;