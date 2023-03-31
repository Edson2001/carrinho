import Container from '@Components/Container';
import React from 'react';
import { View,Text, ImageBackground } from 'react-native';
import Header from "@Components/Header"
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import Activites from "@Components/Activites"
import Button from '@Components/Button';


const home: React.FC = () => {
  return (
    <Container >
      <SafeAreaView className='flex-col realtive'>
        <Header back={false} showTitle={true} />
        <ImageBackground imageStyle={{borderBottomLeftRadius: 40, borderBottomRightRadius: 40}} source={require("@Images/home.png")} className='absolute w-full h-[400px] rounded-bl-full flex-col justify-end pb-12 items-center'>
         <View className='w-[300px] '>
            <Button text='Novo carrinho' />
         </View>
        </ImageBackground>

        <Activites class='mt-[290px]'  />
        
      </SafeAreaView>
    </Container>
  );
}

export default home;