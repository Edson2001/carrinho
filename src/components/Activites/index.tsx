import React from 'react';
import { View, Text , FlatList} from 'react-native';
import {Feather} from "@expo/vector-icons"
import { Pressable } from 'react-native';
import {Link} from "expo-router"

interface propsList{
    status: 1 |  0 | number
    numberCart: number
}
interface Props{
    class?: string
    data?: []
}

const List = (props: propsList)=>(
    <Link href="/cart" >
        <View className='flex-row relative  justify-between items-center mb-5'>
            <View className='flex-row items-center ' >
                <View className='bg-[#162140] w-[60px] h-[60px] rounded-full flex-row items-center justify-center mr-5'  >
                    <Feather name='activity' color={"#FFF"} size={20} />
                </View>
                <View >
                    <Text className='text-white font-bold mb-2'>
                        Nª {props.numberCart}
                    </Text>
                    <View className='flex-row'>
                        <Text className={`${props.status === 1 ? 'text-success' : "text-open"} font-bold`} >{props.status === 1 ? 'Finalizado' : "Aberto"} </Text> 
                        <Text className='text-white text-xs'> - 20/12/2023 10:50</Text>
                    </View>
                </View>
            </View>
            
            <View>
                <Text className='text-white font-bold text-lg'>$129.99</Text>
                <Text className='text-white text-sm font-semibold'>Kz50.000</Text>
            </View>
        </View>
    </Link>
)

const Activites: React.FC<Props> = (props) => {

  const data = [
    {
        status: 1,
        numberCart: 1
    },
    {
        status: 0,
        numberCart: 2
    },
    {
        status: 0,
        numberCart: 2
    },
    {
        status: 1,
        numberCart: 2
    },
    {
        status: 0,
        numberCart: 1
    },
   
  ]

  return (
    <View className={`relative p-[20px] ${props.class}`}>
        <View className='flex-row justify-between mb-5'>
            <Text className='text-white '>Atividades</Text>
            <Pressable className='flex-row items-center'>
                <Text className='text-[#c8482c] font-bold mr-3'>Vert todos</Text>
                <Feather size={20} name='arrow-right-circle' color={"#c8482c"} />
            </Pressable>
        </View>
        <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item})=> <List status={item.status} numberCart={item.numberCart} />} />
    </View>
  );
}

export default Activites;