import Button from '@Components/Button';
import Container from '@Components/Container';
import Header from '@Components/Header';
import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { useCustomerStore } from '@src/store/customer';
import {BottomSheet} from "react-native-btr"
import Input from '@Components/Input';
import List from '@Components/List';
const Customer: React.FC = () => {
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
            <BottomSheet onBackButtonPress={()=>setVisible(!visible)} onBackdropPress={()=> setVisible(!visible)} visible={visible} >
                <View className='bg-white h-[85%] rounded-tl-[30px] rounded-tr-[30px] p-[30px] flex-col justify-between'>
                   <View className=''>
                        <Input label='Nome' class='mb-10' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                        <Input  label='Número de telefone' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                    </View>
                    <Button class='mb-4' handleFunction={()=> setVisible(!visible)} text='Cadastrar cliente ' />
                </View>
            </BottomSheet>
        </>
    </Container>
  );
}

export default Customer;