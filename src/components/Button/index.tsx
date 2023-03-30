import React from 'react';
import { Text, Pressable } from 'react-native';
interface Props{
    text: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <Pressable className='bg-buttonBackground w-full rounded-full p-5' >
        <Text className=' text-center text-textWhiteSecondary'>{props.text}</Text>
    </Pressable>
  );
}

export default Button;