import { supabase } from "@src/databases/supbase"
import {create} from "zustand"
//import axios from "axios"

interface propsStoreProducts{
    state:{
        products?: [],
        loading?: boolean
    },

    setProducts?: (cartID: number | string)=> void
    addProduct?: ({products, cartID, customerID, exchange}:{products: {
        priceDolar: string | number,
        priceAOA?: string | number,
        qtd: string | number,
        image: string,
        name: string,
        description: string,
        product_link: string,
    }, cartID: number | string , customerID: number | string, exchange: string | Number})=> void
}

export const useProductStore = create<propsStoreProducts>(set=>({
    state:{
        products: [],
        loading: false
    },
    setProducts: async (cartID)=>{

        cartID = Number(cartID)
        const {data, error} = await supabase
        .from("products_cart")
        .select(`*, customer(name, number_phone)`)
        .eq('cart_id', cartID)
        
        set({
            state:{
                products: data || []
            }
        })
    },
    addProduct: async ({cartID, customerID, products, exchange})=>{

        set({state: {loading: true}})
        products.priceDolar = Number(products.priceDolar) 
        products.qtd = Number(products.qtd)
        products.priceAOA = (products.priceDolar * products.qtd) * Number(exchange)

        const {error, status} = await supabase.from('products_cart')
        .insert({
            ...products,
            cart_id: cartID,
            customer_id: customerID
        })
        set({state: {loading: false}})
        console.log(error, status)
        
    }
}))