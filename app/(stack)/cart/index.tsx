import Button from '@Components/Button';
import Container from '@Components/Container';
import Header from '@Components/Header';
import React, {useEffect, useState} from 'react';
import { View, Text, Image } from 'react-native';
import ProductList from "@Components/ProductList"
import {BottomSheet} from "react-native-btr"
import AddProduct from '@Components/addProduct';
import { useProductStore } from '@src/store/product';
import { useSearchParams } from 'expo-router';
const CartEmpty = ()=>(
    <View className='w-full flex-col justify-center items-center h-[80%]'>
        <Image source={require("@Images/product.png")} />
    </View>
)

const Cart: React.FC = () => {
  
  const {products, setProducts, isOpenBottomSheet, toggleBottomSheet} = useProductStore(state=> state)
  const [totalDolar, setTotalDolar] = useState(0)
  const [totalKwanza, setTotalKwanza] = useState(0)
  const [qtd, setQtd] = useState(0)
  const params = useSearchParams()
  useEffect(()=>{
    setProducts(params.id)
  }, [])

  return (
    <Container>
        <>
            <Header myClass='flex-2' showTitle={false} back={true}   />
            <View className='flex-1 h-screen '>
                <View className='p-3 '>
                    <Button class='mb-3' handleFunction={()=> toggleBottomSheet(true)} text='Adicionar produto ' />
                    {products && products.length > 0 ? <ProductList data={products} /> : <CartEmpty /> }
                </View>

                <View className='flex-row justify-between items-center w-full absolute bottom-0  p-[10px] bg-white'>
                    <Text className='text-xl font-bold mb-2'>Carrinho</Text>
                    <View className='flex-row items-center mb-2'>
                        <View className='mr-5'>
                            <Text className='font-bold' >Kz{totalKwanza}</Text>
                            <Text className='text-semibold text-lg'>${totalDolar}</Text>
                            <Text className='text-semibold'>Quantidade: {qtd}</Text>
                        </View>
                        <View className='w-[100px]'>
                            <Button text='Finalizar' />
                        </View>
                    </View>
                </View>
            </View>
            <BottomSheet onBackButtonPress={()=>toggleBottomSheet(false)} onBackdropPress={()=> toggleBottomSheet(false)} visible={isOpenBottomSheet} >
                <View className='bg-white h-[85%] rounded-tl-[30px] rounded-tr-[30px]'>
                    <AddProduct exchange={params.exchange} cartID={params.id} />
                </View>
            </BottomSheet>
        </>
    </Container>
  );
}

export default Cart;