import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {  useRouter } from 'expo-router';

interface propsList{
   item:{
    title:  string
    id: number,
    link?: string
    subTitle?: string
    rightTitle?: string
    rightSubTitle?: string
   }
}

interface propsListFlat{
    link?: string
    data: [],
    key?: string
}
const ListItem = ({item}: propsList)=>{
    const router = useRouter()

    function handleFunction(){
        if(item.link) router.push(item.link)
    }
    
    return (
        <TouchableOpacity onPress={()=> handleFunction()} >
            <View className='p-[20px] rounded-[6px] w-full flex-row justify-between items-center border-[#DDDEDF] border-[1px] mb-4'>
                <View className='flex-row items-center ' >
                    <View className='w-[30px] h-[30px] flex-row justify-center items-center rounded-full bg-sucess bg-open'>
                        <Text className='font-bold  text-white'>
                            {item.id}
                        </Text>
                    </View>
                    <View className='pl-2'>
                        <Text className={` font-bold mb-1`} >{item.title} </Text> 
                        <Text className=' text-xs'>{item.subTitle}</Text>
                    </View>
                </View>
                <View>
                    <Text className=' font-bold text-lg'>{item.rightTitle}</Text>
                    <Text className=' text-sm font-semibold'>{item.rightSubTitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
     )
}
const List: React.FC<propsListFlat> = (props) => {
    
    return (
        <FlatList
            keyExtractor={item => item.id+props.key} 
            data={props.data}  
            className='w-full '
            renderItem={({item})=> (<ListItem item={item} />)}
        />
    );
}

export default List;