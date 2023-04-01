import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView } from 'react-native';
import { usePathname } from 'expo-router';


interface Props{
  children: React.ReactElement
}
const Container: React.FC<Props> = (props) => {
  const routeName = usePathname()
  return (
    <>
      {routeName == '/home' ? <SafeAreaView className='flex-0 bg-[#8075f7]' /> : <></>}
      <SafeAreaView  className='flex-1 h-full bg-background relative'>
        <StatusBar style='light'/>
        {props.children}
      </SafeAreaView>
      {routeName == '/cart' ? <SafeAreaView className='flex-0 bg-white' /> : <></>}
    </>
  );
}

export default Container;