import React, {useState} from 'react';
import { View,FlatList,Text, Image} from 'react-native';
import { Pressable, TouchableOpacity } from 'react-native';
import {BottomSheet} from "react-native-btr"
import Button from '@Components/Button';

interface ProductType {
    image: string
    name: string
    description: string
    currencyDolar:number
    currencyAOA: number,
    qtd: number,
    costumer: number,
    productLink: string 
    handleFunction?: ()=> void  
    data?: [] | null
    customer: {}
}


const List = ({item}: ProductType | any)=>{
    const [visibleBottomSheet, setVisible] = useState(false)
    function openBottomSheet(){
        setVisible(true)
    }
    return (
    
        <TouchableOpacity onPress={()=> openBottomSheet()} >
            <View className='bg-white  flex-row p-3 mb-4'>
                <Image className='w-[100px] h-[100px]' source={{
                    uri: item.image
                }} />
                <View className='ml-3'>
                    <View className='flex-col'>
                        <View className='flex-row justify-between items-center  w-full'>
                            <Text className='mb-3 w-[200px]'>{item.name}</Text>
                        </View>
                    </View>
                    <View className='flex-row w-full items-center '>
                        <View className='flex-col mr-2 '>
                            <Text className='font-bold text-2xl'>${item.priceDolar} </Text>
                            <Text className='font-bold text-xs'>Kz{item.priceAOA}</Text>
                        </View>
                        <Text>X {item.qtd}</Text>         
                    </View>
                    <View>
                        <Text>{item.customer.name} - {item.customer.number_phone} </Text>
                    </View>
                </View>
            </View>
            <BottomSheet visible={visibleBottomSheet} onBackButtonPress={()=> setVisible(false)} onBackdropPress={()=> setVisible(false)} >
        
                <View className='bg-white h-[80%] p-[30px] flex-col justify-between rounded-tr-[30px] rounded-tl-[30px]'>
                    <View className=''>
                        <View  className='mb-10'>
                            
                            <Text className='font-bold text-2xl'>{item.name} </Text>
                            <Text>{item.description}</Text>
                        </View>
                        <View className='mb-6'>
                            <Text >Data e hora</Text>
                            <Text>{item.data}</Text>
                        </View>

                        <View className='flex-row justify-between'>
                            <View>
                                <Text className='font-normal'>Total em Kz</Text>
                                <Text className='font-bold'>{item.priceAOA}</Text>
                            </View>
                            <View>
                                <Text className='font-normal'>Total em Dolar</Text>
                                <Text className='font-bold text-right'>{item.priceDolar}</Text>
                            </View>
                        </View>
                    </View>
                    <View className='flex-col justify-end'>
                        <Button class='mb-5' text='Editar produto' />
                        <Button class='' text='Excluir produto' />
                    </View>
                    
                </View>

            </BottomSheet>
        </TouchableOpacity>
      
    )
}

const ProductList: React.FC<ProductType> = (props) => {
  return (
    <View className='w-full'>
        <FlatList data={props.data} renderItem={({item})=> <List  item={item}  />}  />
    </View>
  );
}

export default ProductList;