import Button from '@Components/Button';
import Container from '@Components/Container';
import Header from '@Components/Header';
import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useCustomerStore } from '@src/store/customer';
import {BottomSheet} from "react-native-btr"
import Input from '@Components/Input';
import List from '@Components/List';

const Customer: React.FC = () => {

  const {loading,customers, setCustomer,createCustomer, isBottomSheet, toggleBottomSheet} = useCustomerStore(state=> state)
  const [customerName, setCustomerName] = useState(null)
  const [customerNumberPhone, setCustomerNumberPhone] = useState(null)

  useEffect(()=>{
    setCustomer()
  },[])

  return (
    <Container>
      <>
        <Header myClass='flex-2' showTitle={false} back={true}   />
        <View className='flex-1 h-screen p-3'>
          <Button class='mb-4' handleFunction={()=> toggleBottomSheet(true)} text='Cadastrar cliente ' />
          <List data={customers} />
        </View>
        <BottomSheet onBackButtonPress={()=>toggleBottomSheet(false)} onBackdropPress={()=> toggleBottomSheet(false)} visible={isBottomSheet} >
            <View className='relative bg-white h-[85%] rounded-tl-[30px] rounded-tr-[30px] p-[30px] flex-col justify-between'>
              <View className=''>
                <Input value={customerName} setText={setCustomerName} label='Nome' class='mb-10' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                <Input keyboardType='numeric' value={customerNumberPhone} setText={setCustomerNumberPhone} label='Número de telefone' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
              </View>
              <Button class='mb-4' handleFunction={()=> createCustomer({name: customerName,number_phone: customerNumberPhone})} text='Cadastrar cliente ' />
              {loading ? <ActivityIndicator className='absolute top-1/2 left-1/2' size={"large"} /> : <></>}
            </View>
            
        </BottomSheet>
      </>
    </Container>
  );
}

export default Customer;