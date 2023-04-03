import React from 'react';
import {Stack} from "expo-router"

const Layout: React.FC = () => {
  return (
    <Stack screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name='home/index' />
      <Stack.Screen name='cart/index' />
      <Stack.Screen name='customer/index' />
    </Stack>
  );
}

export default Layout;