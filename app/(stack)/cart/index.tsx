import Button from '@Components/Button';
import Container from '@Components/Container';
import Header from '@Components/Header';
import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import ProductList from "@Components/ProductList"
import {BottomSheet} from "react-native-btr"
import AddProduct from '@Components/addProduct';

const CartEmpty = ()=>(
    <View className='w-full flex-col justify-center items-center h-[80%]'>
        <Image source={require("@Images/product.png")} />
    </View>
)

const Cart: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const data = [
   {
    img: "https://img.ltwebstatic.com/images3_pi/2022/01/22/164282074681ff9e367d8803687c133f0d2b905756_thumbnail_900x.webp",
    name: "Men Cartoon & Letter Graphic Swim Trunks",
    description: "SHEIN Men Solid Patched Detail Drawstring Waist Shorts Lormkwfwfemf e ewfmkweme ewfkmkmekfwe ewfemfkefmkewmf m fefekwfmkefm efmekwmf",
    currencyDolar: 199,
    currencyAOA: 4000,
    qtd: 5,
    costumer: 1,
    productLink: "https://us.shein.com/Men-Cartoon-Letter-Graphic-Swim-Trunks-p-8173952-cat-2025.html?src_module=Men&src_identifier=on=FLASH_SALE`cn=FlashSale`hz=0`ps=7_0`jc=flashSale_0&src_tab_page_id=page_home1680195102896&mallCode=1"
   }
  ]
  return (
    <Container>
        <>
            <Header myClass='flex-2' showTitle={false} back={true}   />
            <View className='flex-1 h-screen '>
                <View className='p-3 '>
                    <Button class='mb-3' handleFunction={()=> setVisible(!visible)} text='Adicionar produto ' />
                    {data.length > 0 ? <ProductList data={data} /> : <CartEmpty /> }
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