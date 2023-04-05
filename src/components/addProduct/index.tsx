import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text } from 'react-native';
import Input from '@Components/Input';
import Button from '@Components/Button';
import * as ImagePicker from "expo-image-picker"
import { useCustomerStore } from '@src/store/customer';
import Dropdown from 'react-native-input-select';

const addProduct: React.FC = () => {

  const {state, setCustomer} = useCustomerStore(state=> state)
  const [image, setImage] = useState(null)
  const [customers, setCustomers] = useState([])

  useEffect(()=>{
    setCustomer({})
  }, [])


  const pickeckerImage = async ()=>{
    const result = await ImagePicker.launchImageLibraryAsync()
    if(!result.canceled) {
        console.log(result.assets[0].uri)
        return 
    }
    if(result.canceled) console.log(result.canceled)
  }

  const [customerSelected, setSelectCustomer] = useState();
  return (
    <ScrollView horizontal={false} nestedScrollEnabled={false} className='p-[30px] h-full'>
        <View className='h-[80%] bg-white rounded-tl-[30px] rounded-tr-[30px]'>
        
            <View className='flex-row items-center justify-between mb-10'>
                <View className='w-full'>
                    <Input label='Nome' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
            </View>
            <View className='flex-row items-center justify-between mb-10'>
                <View className='w-[45%]'>
                    <Input label='Preço em Kz' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
                <View className='w-[45%]'>
                    <Input label='Preço em Dolar' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
            </View>
            <View className='flex-row items-center justify-between mb-3'>
                <View className='w-[45%]'>
                    <Input label='Quantidade' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
                <View className='w-[45%]'>
                    <Input label='Link do produto' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
            </View>
            <View className='w-full mb-3 '>
                <Input label='Descrição' classInput=' bg-white border-[#DDDEDF] border-[1px] h-[120px]' />
            </View>
            <View className='mb-3'>
                <Text className='mb-2'>Selecionar cliente</Text>
                <Dropdown
                    label="Country"
                    placeholder="Select an option..."
                    options={state.customers}
                    optionLabel={'title'}
                    optionValue={'id'}
                    selectedValue={customerSelected}
                    onValueChange={(value) => setSelectCustomer(value)}
                    primaryColor={'green'}
                />
            </View>
            <View>
                <Button handleFunction={()=> pickeckerImage()} class='rounded-[6px]' text='Cadastrar produto' />
            </View>
        
        </View>
    </ScrollView>
  );
}

export default addProduct;