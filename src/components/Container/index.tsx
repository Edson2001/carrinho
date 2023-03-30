import React from 'react';
import { View } from 'react-native';

interface Props{
    children: React.ReactElement
}
const Container: React.FC<Props> = (props) => {
  return (
    <View className='h-screen bg-background flex-col '>
      {props.children}
    </View>
  );
}

export default Container;