import Container from '@Components/Container';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Header from "@Components/Header"
import Activites from '@Components/Activites';
import Button from '@Components/Button';
import Card from '@Components/Card';
import {BottomSheet} from "react-native-btr"
import Input from '@Components/Input';
import { useCartStore } from '@src/store/cart';
import { useRouter } from 'expo-router';

const home: React.FC = () => {

  const [visible, setVisible] = useState(false)
  
  const {setCart, state} = useCartStore(state=> state)
  const router = useRouter()
  
  function newCart(){
    setVisible(false)
    router.push("/newcart")
  }

  useEffect(()=>{
    setCart()
  },[])

  return (
    <Container >
      <>
        <Header back={false} showTitle={true} />
        <View className='p-[20px] '>
          <Card class='rounded-[8px] mb-10 '>
            <View className='p-[30px]'>
              
              <Text className='font-semibold text-xl text-center mb-3'>4.000</Text>
              <Text className='text-center font-normal'>Lucro até agora</Text>
             
            </View>
          </Card>
          <View className='w-full '>
            <Text className='mb-3'>Abrir novo carrinho</Text>
            <Button  handleFunction={()=> setVisible(true)} text='Novo carrinho ' class='rounded-[6px] mb-10' />
            <Activites data={state.cart}  />

            <BottomSheet visible={visible} onBackButtonPress={()=> setVisible(false)}  onBackdropPress={()=> setVisible(false)} >
              <View className='bg-white h-[300px] rounded-tl-[30px] rounded-tr-[30px] p-[30px] flex-col justify-between'>
                <Input label='Câmbio' />
                <Button handleFunction={()=> newCart()} text='Abrir carrinho' />
              </View>
            </BottomSheet>

          </View>
        </View>
      </>
    </Container>
  );
}

export default home;