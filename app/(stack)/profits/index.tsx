import Button from '@Components/Button';
import Container from '@Components/Container';
import Header from '@Components/Header';
import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { useCustomerStore } from '@src/store/customer';
import {BottomSheet} from "react-native-btr"
import Input from '@Components/Input';
import List from '@Components/List';
const profits: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const {state, setCustomer} = useCustomerStore(state=> state)

  useEffect(()=>{
    setCustomer({})
  }, [])

  return (
    <Container>
        <>
            <Header myClass='flex-2' showTitle={false} back={true}   />
            <View className='flex-1 h-screen p-3'>
                <Button class='mb-4' handleFunction={()=> setVisible(!visible)} text='Cadastrar cliente ' />
                <List data={state.customers} />
            </View>
            
        </>
    </Container>
  );
}

export default profits;