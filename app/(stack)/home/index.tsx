import Container from '@Components/Container';
import React from 'react';
import { View, Text } from 'react-native';
import Header from "@Components/Header"
import Activites from '@Components/Activites';
import Button from '@Components/Button';
import Card from '@Components/Card';

const home: React.FC = () => {

  return (
    <Container >
      <>
        <Header back={false} showTitle={true} />
        <View className='p-[20px]'>
          <Card class='rounded-[8px] mb-10'>
            <View className='p-[30px] '>
              <Text className='font-semibold text-xl text-center mb-3'>4.000</Text>
              <Text className='text-center font-normal'>Lucro até agora</Text>
            </View>
          </Card>
          <View className='w-full '>
            <Text className='mb-3'>Abrir novo carrinho</Text>
            <Button  text='Novo carrinho ' class='rounded-[6px] mb-10' />
          </View>
          <Activites  />
        </View>
      </>
    </Container>
  );
}

export default home;