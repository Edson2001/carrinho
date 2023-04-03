import Button from '@Components/Button';
import Container from '@Components/Container';
import Header from '@Components/Header';
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import ProductList from "@Components/ProductList"
import {BottomSheet} from "react-native-btr"
import AddProduct from '@Components/addProduct';
const Cart: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Container>
        <>
            <Header myClass='flex-2' showTitle={false} back={true}   />
            <View className='flex-1 h-screen '>
                <View className='p-3 '>
                    <Button class='mb-3' handleFunction={()=> setVisible(!visible)} text='Adicionar produto ' />
                    <ProductList />
                </View>

                <View className='flex-row justify-between items-center w-full absolute bottom-0  p-[10px] bg-white'>
                    <Text className='text-xl font-bold mb-2'>Carrinho</Text>
                    <View className='flex-row items-center mb-2'>
                        <View className='mr-5'>
                            <Text className='font-bold text-lg' >Kz4.000</Text>
                            <Text className='text-semibold'>$ 129.99</Text>
                        </View>
                        <View className='w-[100px]'>
                            <Button text='Finalizar' />
                        </View>
                    </View>
                </View>
            </View>
            <BottomSheet onBackButtonPress={()=>setVisible(!visible)} onBackdropPress={()=> setVisible(!visible)} visible={visible} >
                <View className='bg-white h-[85%] rounded-tl-[30px] rounded-tr-[30px]'>
                    <AddProduct />
                </View>
            </BottomSheet>
        </>
    </Container>
  );
}

export default Cart;