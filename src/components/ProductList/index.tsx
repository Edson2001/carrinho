import React from 'react';
import { View,FlatList,Text, Image} from 'react-native';
import {Feather} from "@expo/vector-icons"
import { Pressable } from 'react-native';
interface ProductType {
    img: string
    name: string
    description: string
    currencyDolar:number
    currencyAOA: number,
    qtd: number,
    costumer: number,
    productLink: string
    
}
const List = ({item}: ProductType | any)=>{
    console.log(item)
    return (
    
        <View className='bg-white  flex-row p-3'>
            <Image   className='w-[100px] h-[100px]' source={{
                uri: item.img
            }} />
            <View className='ml-3'>
                <View className='flex-col'>
                    <View className='flex-row justify-between items-center  w-full'>
                        <Text className='mb-3 w-[200px]'>{item.name}</Text>
                        <Pressable>
                            <Feather size={10} name='trash' color={"#000"} />
                        </Pressable>
                    </View>
                    
                    <Text className='w-[200px]'>{item.description}</Text>
                    
                </View>
                <View className='flex-row w-full justify-between'>
                    <View>
                        <Text className=''>$4.00</Text>
                        <Text className=''>Kz8.000</Text>
                    </View>
                    <View className='flex-row items-center '>
                        <Pressable>
                            <Text className=''>-</Text>
                        </Pressable>
                        <Text className=''>1</Text>
                        <Pressable>
                            <Text className=''>+</Text>
                        </Pressable>
                    </View>
                </View>
           </View>
        </View>
    )
}

const ProductList: React.FC = () => {
  const data: [ProductType] = [
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
    <View className='w-full p-3'>
        <FlatList data={data} renderItem={({item})=> <List item={item} />}  />
    </View>
  );
}

export default ProductList;