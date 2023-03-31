import React from 'react';
import { View, TextInput, Text } from 'react-native';

interface Props{
    label?: string
    class?: string
}
const Input: React.FC<Props> = (props) => {
  return (
    <View className={` w-full ${props.class}`}>
        {props.label ? <Text className='text-textWhiteSecondary mb-3 font-normal'>{props.label}</Text> : <></>}
        <TextInput  className='rounded-[6px] p-5 border-none w-full bg-backgroundInput' />
    </View>
  );
}

export default Input;