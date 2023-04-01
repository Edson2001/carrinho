import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import {Feather} from "@expo/vector-icons"
import { Link, useRouter } from 'expo-router';
interface Props{
  showTitle?: boolean,
  back?: boolean
  myClass?: string
}


const Menu = ()=>(
  <View > 
    <Feather name='menu' size={20} color={"#FFF"}  />
  </View>
)

const Back = ( )=>{
  const router = useRouter()
  return (
    <Pressable onPress={()=> router.back()}>
      <Feather color={"#5F77F5"} size={30} name='arrow-left' />
    </Pressable>
  )
}

const Header: React.FC<Props> = ({ back, showTitle, myClass}) => {
  return (
    <View className={`flex-row  justify-between  w-full p-[20px] z-50 relative ${myClass}`}>
        {back ? <Back  /> : <Menu /> }
        {showTitle ? <View><Text className='text-textInfo font-bold text-3xl'>Carinho</Text></View> : <></>}
        <View>
          <Image className='w-[40px] h-[40px] rounded-full'  source={require("@Images/user.png")} />
        </View>
    </View>
  );
}

export default Header;