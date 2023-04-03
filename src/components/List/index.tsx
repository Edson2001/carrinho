import React, {useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { Link } from 'expo-router';
interface propsList{
    status: 1 |  0 | number
    numberCart: number
}
const ListItem = (props: propsList)=>(
    <Link href="/cart"  className='mb-6 w-full'>
        <View className='p-[20px] rounded-[6px] w-full flex-row justify-between items-center border-[#DDDEDF] border-[1px]'>
            <View className='flex-row items-center ' >
                
                <View className='w-[30px] h-[30px] flex-row justify-center items-center rounded-full bg-sucess bg-open'>
                    <Text className='font-bold  text-white'>
                        {props.numberCart}
                    </Text>
                </View>
                <View className='pl-2'>
                    <Text className={`${props.status === 1 ? 'text-success' : "text-open"} font-bold mb-1`} >{props.status === 1 ? 'Finalizado' : "Aberto"} </Text> 
                    <Text className=' text-xs'>20/12/2023 10:50</Text>
                </View>
                
            </View>
            
            <View>
                <Text className=' font-bold text-lg'>$129.99</Text>
                <Text className=' text-sm font-semibold'>Kz50.000</Text>
            </View>
        </View>
    </Link>
)
const List: React.FC = () => {
    const [data, setData] = useState([
    {
        status: 1,
        numberCart: 1,
        id: 1
    },
    {
        status: 0,
        numberCart: 2,
        id: 2
    },
    {
        status: 0,
        numberCart: 2,
        id: 3
    },
    {
        status: 1,
        numberCart: 2,
        id: 4
    },
    {
        status: 0,
        numberCart: 1,
        id: 5
    },
       
    ])
    return (
        <FlatList
            keyExtractor={item => item.id} 
            data={data}  
            renderItem={({item})=> (<ListItem status={item.status} numberCart={item.numberCart} />)}
        />
    );
}

export default List;