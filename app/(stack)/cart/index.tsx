import Button from '@Components/Button';
import Container from '@Components/Container';
import Header from '@Components/Header';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, Text } from 'react-native';
import ProductList from "@Components/ProductList"
const Cart: React.FC = () => {
  return (
    <Container>
        <SafeAreaView className='relative'>
            <Header showTitle={false} back={true}   />
            <View className='h-screen mt-3'>
                <Button text='Adicionar produto ' />

                <ProductList />

                <View className='h-[120px] flex-row justify-between items-center w-full absolute bottom-0 mb-[120px] p-[10px] bg-white'>
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

        </SafeAreaView>
    </Container>
  );
}

export default Cart;