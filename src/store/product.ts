import {create} from "zustand"

interface propsStoreProducts{
    state:{
        products: []
    },

    setProducts?: ()=> void
}

export const useProductStore = create<propsStoreProducts>(set=>({
    state:{
        products: []
    },
    setProducts(){
        const data = [
            {
             img: "https://img.ltwebstatic.com/images3_pi/2022/01/22/164282074681ff9e367d8803687c133f0d2b905756_thumbnail_900x.webp",
             name: "Men Cartoon & Letter Graphic Swim Trunks",
             description: "SHEIN Men Solid Patched Detail Drawstring Waist Shorts Lormkwfwfemf e ewfmkweme ewfkmkmekfwe ewfemfkefmkewmf m fefekwfmkefm efmekwmf",
             priceDolar: 199,
             priceAOA: 5000,
             qtd: 5,
             costumer: 1,
             data: '12/03/2023',
             productLink: "https://us.shein.com/Men-Cartoon-Letter-Graphic-Swim-Trunks-p-8173952-cat-2025.html?src_module=Men&src_identifier=on=FLASH_SALE`cn=FlashSale`hz=0`ps=7_0`jc=flashSale_0&src_tab_page_id=page_home1680195102896&mallCode=1",
             customer: "Edson Santos",
             customerNumber: '9233434'
            },
            {
                img: "https://img.ltwebstatic.com/images3_pi/2023/01/19/167411268329ffd9bb4358fe3506030bbb1124c69c_thumbnail_900x.webp",
                name: "Geo Print Notched Neckline Batwing Sleeve Blouse",
                description: "SHEIN Men Solid Patched Detail Drawstring Waist Shorts Lormkwfwfemf e ewfmkweme ewfkmkmekfwe ewfemfkefmkewmf m fefekwfmkefm efmekwmf",
                priceDolar: 90,
                priceAOA: 2000,
                qtd: 2,
                costumer: 1,
                data: '12/03/2023',
                customer: "Edson Santos",
                customerNumber: '9233434',
                productLink: "https://us.shein.com/Men-Cartoon-Letter-Graphic-Swim-Trunks-p-8173952-cat-2025.html?src_module=Men&src_identifier=on=FLASH_SALE`cn=FlashSale`hz=0`ps=7_0`jc=flashSale_0&src_tab_page_id=page_home1680195102896&mallCode=1"
            },
            {
                img: "https://img.ltwebstatic.com/images3_pi/2023/01/19/167411268329ffd9bb4358fe3506030bbb1124c69c_thumbnail_900x.webp",
                name: "Geo Print Notched Neckline Batwing Sleeve Blouse",
                description: "SHEIN Men Solid Patched Detail Drawstring Waist Shorts Lormkwfwfemf e ewfmkweme ewfkmkmekfwe ewfemfkefmkewmf m fefekwfmkefm efmekwmf",
                priceDolar: 20,
                priceAOA: 800,
                qtd: 2,
                costumer: 1,
                data: '12/03/2023',
                customer: "Deusa Oliveira",
                customerNumber: '9233434',
                productLink: "https://us.shein.com/Men-Cartoon-Letter-Graphic-Swim-Trunks-p-8173952-cat-2025.html?src_module=Men&src_identifier=on=FLASH_SALE`cn=FlashSale`hz=0`ps=7_0`jc=flashSale_0&src_tab_page_id=page_home1680195102896&mallCode=1"
            }
        ]
        set({
            state:{
                products: data
            }
        })
    }
}))