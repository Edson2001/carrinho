import React from 'react';
import { View,FlatList,Text, Image} from 'react-native';

interface ProductType {
    img: string
    name: string
    description: string
    currencyDolar:number
    currencyAOA: number,
    qtd: number,
    costumer: number,
    productLink: string
    
}
const List = (item: ProductType | any)=>(
    <View>
        <Image  className='w-[200px] h-[200px]' source={{
            uri: item.img
        }} />
        <Text className='text-white'>{item.name}</Text>
    </View>
)

const ProductList: React.FC = () => {
  const data: [ProductType] = [
    {
        img: "https://img.ltwebstatic.com/images3_pi/2022/02/16/1645003997a3299ed04bc5746b81afffb0d28d3b5f_thumbnail_900x.webp",
        name: "Men Cartoon & Letter Graphic Swim Trunks",
        description: "Lormkwfwfemf e ewfmkweme ewfkmkmekfwe ewfemfkefmkewmf m fefekwfmkefm efmekwmf",
        currencyDolar: 199,
        currencyAOA: 4000,
        qtd: 5,
        costumer: 1,
        productLink: "https://us.shein.com/Men-Cartoon-Letter-Graphic-Swim-Trunks-p-8173952-cat-2025.html?src_module=Men&src_identifier=on=FLASH_SALE`cn=FlashSale`hz=0`ps=7_0`jc=flashSale_0&src_tab_page_id=page_home1680195102896&mallCode=1"
    }
  ]
  return (
    <View className='w-full'>
        <FlatList data={data} renderItem={({item})=> <List item={item} />}  />
    </View>
  );
}

export default ProductList;