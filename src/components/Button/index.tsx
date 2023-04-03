import React from 'react';
import { Text, Pressable } from 'react-native';
interface Props{
  text: string
  handleFunction?: ()=> void
  class?: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <Pressable onPress={props.handleFunction} className={`bg-[#333638] w-full  p-5 ${props.class}`} >
      <Text className=' text-center text-white'>{props.text}</Text>
    </Pressable>
  );
}

export default Button;