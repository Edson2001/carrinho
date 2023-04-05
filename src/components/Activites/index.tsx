import React, {useCallback, useMemo, useRef, useState} from 'react';
import { View, Text ,ScrollView} from 'react-native';
import {Feather} from "@expo/vector-icons"
import { Pressable } from 'react-native';
import List from '@Components/List';
import { useRouter } from 'expo-router';
import {BottomSheet} from "react-native-btr"
interface Props{
  class?: string
  data: []
}

const Activites: React.FC<Props> = (props) => {
  const customer = useRouter()
  const [listCartVisible, setListCartVisible] = useState(false)
  return (
    <View className={`relative ${props.class} w-full `}>
        <View className='flex-row justify-between mb-3 w-full'>
          <Pressable onPress={()=> setListCartVisible(true)} className='flex-row items-center mb-3'>
            <Feather size={20} name='arrow-right-circle' color={"#c8482c"} />
            <Text className='text-[#c8482c] font-bold ml-3'>Ver todos</Text>
          </Pressable>
          <Pressable onPress={()=> customer.push("/customer")} className='flex-row items-center mb-3'>
            <Text className='text-success font-bold mr-3'>Clientes</Text>
            <Feather size={20} name='arrow-right-circle' color={"#559C2A"} />
          </Pressable>
        </View>
        {listCartVisible == false ? <List data={props.data} /> :<></>}
        <BottomSheet visible={listCartVisible} onBackButtonPress={()=> setListCartVisible(false)}  onBackdropPress={()=> setListCartVisible(false)} >
          <View className='bg-white h-[80%] rounded-tl-[30px] rounded-tr-[30px] p-[30px] flex-col justify-between'>
            <ScrollView>
              <List data={props.data} key="1" />
            </ScrollView>
          </View>
        </BottomSheet>
    </View>
  );
}

export default Activites;