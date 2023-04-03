import React, {useState} from 'react';
import { View, ScrollView, Text } from 'react-native';
import Input from '@Components/Input';
import Button from '@Components/Button';
import Select from "react-native-dropdown-picker"


const addProduct: React.FC = () => {
  const [customers, setCustomers] = useState([
    {label: 'Edson Bandola', value: 1},
    {label: 'Deusa Oliveira', value: 2},
  ]) 
  const [selectValue, setSelectValue] = useState(1)
  const [openSelect, opensetSelect] = useState(false)
  return (
    <ScrollView className='p-[30px] h-full'>
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
                <Select setItems={setCustomers} items={customers} 
                    open={openSelect} setOpen={opensetSelect}
                    value={selectValue} setValue={setSelectValue}
                />
            </View>
            <View>
                <Button class='rounded-[6px]' text='Cadastrar produto' />
            </View>
        
        </View>
    </ScrollView>
  );
}

export default addProduct;