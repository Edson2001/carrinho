import React, {useState} from 'react';
import { View,FlatList,Text, Image} from 'react-native';
import { Pressable, TouchableOpacity } from 'react-native';
import {BottomSheet} from "react-native-btr"
import Button from '@Components/Button';

interface ProductType {
    img: string
    name: string
    description: string
    currencyDolar:number
    currencyAOA: number,
    qtd: number,
    costumer: number,
    productLink: string 
    handleFunction?: ()=> void  
    data?: [] | null
}


const List = ({item, handleFunction}: ProductType | any)=>{
    return (
    
        <TouchableOpacity onPress={handleFunction} >
            <View className='bg-white  flex-row p-3 mb-4'>
                <Image className='w-[100px] h-[100px]' source={{
                    uri: item.img
                }} />
                <View className='ml-3'>
                    <View className='flex-col'>
                        <View className='flex-row justify-between items-center  w-full'>
                            <Text className='mb-3 w-[200px]'>{item.name}</Text>
                        </View>
                    </View>
                    <View className='flex-row w-full justify-between'>
                        <View className='flex-col '>
                            <Text className='font-bold text-2xl'>$4.00</Text>
                            <Text className='font-bold text-xs'>Kz8.000</Text>
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
        </TouchableOpacity>
      
    )
}

const ProductList: React.FC<ProductType> = (props) => {
  
  const [visibleBottomSheet, setVisible] = useState(false)
  return (
    
    <View className='w-full'>
        <FlatList data={props.data} renderItem={({item})=> <List handleFunction={()=>setVisible(true)} item={item}  />}  />

        <BottomSheet visible={visibleBottomSheet} onBackButtonPress={()=> setVisible(false)} onBackdropPress={()=> setVisible(false)} >
        
            <View className='bg-white h-[80%] p-[30px] flex-col justify-between rounded-tr-[30px] rounded-tl-[30px]'>
                <View className=''>
                    <View  className='mb-10'>
                        
                        <Text className='font-bold text-2xl'>Nova descrição </Text>
                        <Text>Xis completo da lancheria do bairro</Text>
                    </View>
                    <View className='mb-6'>
                        <Text >Data e hora</Text>
                        <Text>12/04/22  as 22:34</Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='font-normal'>Total em Kz</Text>
                            <Text className='font-bold'>3.000</Text>
                        </View>
                        <View>
                            <Text className='font-normal'>Total em Dolar</Text>
                            <Text className='font-bold text-right'>43.000</Text>
                        </View>
                    </View>
                </View>
                <View className='flex-col justify-end'>
                    <Button class='mb-5' text='Editar produto' />
                    <Button class='' text='Excluir produto' />
                </View>
                
            </View>

        </BottomSheet>

    </View>
  );
}

export default ProductList;