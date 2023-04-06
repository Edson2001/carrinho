import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text,TouchableOpacity, ActivityIndicator } from 'react-native';
import Input from '@Components/Input';
import Button from '@Components/Button';
import * as ImagePicker from "expo-image-picker"
import { useCustomerStore } from '@src/store/customer';
import Dropdown from 'react-native-input-select';
import {Feather} from "@expo/vector-icons"
import { useProductStore } from '@src/store/product';

type typeAddProdcut = {
    cartID: string | number,
    exchange: string | number
}

const addProduct: React.FC<typeAddProdcut> = (props) => {

  const {customers, setCustomer} = useCustomerStore(state=> state)
  const productStore = useProductStore(state=> state)
  const [image, setImage] = useState(null)
  const [customerSelected, setSelectCustomer] = useState();
  const [productName, setProductName] = useState('')
  const [priceDolar, setPriceDolar] = useState()
  const [qtd, setQtd] = useState()
  const [link_product, setProuctLink] = useState() 
  const [description, setDescription] = useState()

  useEffect(()=>{
    setCustomer({})
  }, [])

  const pickeckerImage = async ()=>{
    const result = await ImagePicker.launchImageLibraryAsync()
    if(!result.canceled) {
        console.log(result.assets[0].uri)
        setImage(result.assets[0].uri)
        return 
    }
    if(result.canceled) console.log(result.canceled)
  }

  function createProduct(){
   
    productStore.addProduct({
        products:{
           name:  productName,
           image,
           description,
           product_link: link_product,
           qtd,
           priceDolar
        },
        exchange: props.exchange ,
        cartID: props.cartID,
        customerID: customerSelected
    })
  }

  return (
    <ScrollView horizontal={false} nestedScrollEnabled={false} className='p-[30px] h-full'>
        <View className='h-[80%] bg-white rounded-tl-[30px] rounded-tr-[30px] relative' >
        
            <View className='flex-row items-center justify-between mb-10'>
                <View className='w-full'>
                    <Input value={productName} setText={setProductName} label='Nome' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
            </View>
            <View className='flex-row items-center justify-between mb-10'>
                <View className='w-[45%]'>
                    <Input keyboardType='numeric' value={priceDolar} setText={setPriceDolar} label='Preço em Dolar' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
                <View className='w-[45%]'>
                    <Text className='mb-3'>Capa</Text>
                    <TouchableOpacity onPress={()=> pickeckerImage()} className='p-5 w-full relative border-[1px] border-[#DDDEDF] border-dashed flex-row justify-center items-center '>
                        <Feather name='image' size={15} className='' />
                    </TouchableOpacity>
                </View>
            </View>
            
            <View className='flex-row items-center justify-between mb-3'>
                <View className='w-[45%]'>
                    <Input keyboardType='numeric' value={qtd} setText={setQtd} label='Quantidade' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
                <View className='w-[45%]'>
                    <Input value={link_product} setText={setProuctLink} label='Link do produto' classInput='bg-white border-[#DDDEDF] border-[1px] ' />
                </View>
            </View>
            <View className='w-full mb-3 '>
                <Input value={description} setText={setDescription} label='Descrição' classInput=' bg-white border-[#DDDEDF] border-[1px] h-[120px]' />
            </View>
            <View className='mb-3'>
                <Dropdown
                    label="Clientes"
                    placeholder="Selecione um cliente"
                    options={customers}
                    optionLabel={'title'}
                    optionValue={'id'}
                    selectedValue={customerSelected}
                    onValueChange={(value) => setSelectCustomer(value)}
                    primaryColor={'green'}
                />
            </View>
            <View>
                <Button handleFunction={()=>createProduct()} class='rounded-[6px]' text='Cadastrar produto' />
            </View>
            {productStore.loading ? <ActivityIndicator className='absolute top-1/2 left-1/2' size={"large"} /> : <></>} 
        </View>
    </ScrollView>
  );
}

export default addProduct;