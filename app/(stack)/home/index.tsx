import Container from '@Components/Container';
import React from 'react';
import { View,Text, ImageBackground } from 'react-native';
import Header from "@Components/Header"

import Activites from "@Components/Activites"
import Button from '@Components/Button';

const home: React.FC = () => {
  return (
    <Container >
      <>
        <ImageBackground imageStyle={{borderBottomLeftRadius: 40, borderBottomRightRadius: 40}} source={require("@Images/home.png")} className='flex-1  w-full h-[400px] rounded-bl-full flex-col  pb-12 items-center'>
          <Header back={false} showTitle={true} />
          <View className='w-[300px] '>
            <Button text='Novo carrinho' />
          </View>
        </ImageBackground>
        <Activites class='flex-1'  />
      </>
    </Container>
  );
}

export default home;