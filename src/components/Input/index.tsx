import React from 'react';
import { View, TextInput, Text } from 'react-native';

interface Props{
  label?: string
  class?: string
  password?: boolean,
  email?: boolean,
  value?: string | null
  setText?: (value: string | {} | null | void)=> void
  classInput?: string
}
const Input: React.FC<Props> = (props) => {
  const {value, setText}= props
  return (
    <View className={` w-full ${props.class}`}>
      {props.label ? <Text className=' mb-3 font-normal'>{props.label}</Text> : <></>}
      <TextInput value={value} onChangeText={text => setText(text)} keyboardType={props.email ? 'email-address': 'default'} secureTextEntry={props.password}  className={`rounded-[6px] p-5 border-none w-full bg-white border-[#DDDEDF] border-[1px] ${props.classInput}`} />
    </View>
  );
}

export default Input;