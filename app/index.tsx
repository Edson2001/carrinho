import React from 'react';
import { Image } from 'react-native';
import { View, Text } from 'react-native';
import Container from '../src/components/Container';
import Button from '@Components/Button';
// import { Container } from './styles';

const app: React.FC = () => {
  return (
    <Container>
      <View className='flex-col h-screen justify-center items-center p-[30px]'>
        <Text className='text-textSecondry text-3xl font-bold mb-[54px]'>Carinho</Text>
        <Image className='mb-[171px]' source={require("@Images/shipp.png")} />
        <Text className='text-textSecondry font-bold text-[20px] mb-[13px]'>Bem vindo ao Carrinho</Text>
        <Text className='text-textWhiteSecondary mb-[33px] text-center'>Você pode gerenciar seu carrinhos de compra de uma forma mas eficiente.</Text>
        <Button text='Continuar' />
      </View>
    </Container>
  );
}

export default app;