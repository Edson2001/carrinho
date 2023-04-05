import { create } from "zustand";

interface propsStoreCart{
    state: {
        cart: []
    }
    setCart: ()=>void
}

export const useCartStore = create<propsStoreCart>(set=>({
    state: {
        cart: []
    },
    setCart() {
        const data = [
            {
                numberCart: 1,
                id: 1,
                link: "/cart",
                title: '1',
                subTitle: 'Abertura: 22/03/2022',
                rightTitle: '$129.99',
                rightSubTitle: 'Kz 3.000'
            },
            {
                numberCart: 2,
                id: 1,
                link: "/cart",
                title: '2',
                subTitle: 'Abertura: 22/03/2022',
                rightTitle: '$129.99',
                rightSubTitle: 'Kz 3.000',
                
            }
        ]
        set({
            state:{
                cart: data
            }
        })
    },
})) 