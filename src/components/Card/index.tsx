import React from 'react';
import { View } from 'react-native';

interface Props{

    children: React.ReactElement
    class?: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <View className={`bg-[#E5F0DB] w-full ${props.class}`}>
        {props.children}
    </View>
  );
}

export default Card;