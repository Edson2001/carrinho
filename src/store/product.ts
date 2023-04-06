import { supabase } from "@src/databases/supbase"
import {create} from "zustand"
//import axios from "axios"

interface propsStoreProducts{
    
    products?: {}[],
    loading?: boolean,
    close?: boolean,
    isOpenBottomSheet?: boolean,
    toggleBottomSheet?: (state: boolean)=>void,
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

export const useProductStore = create<propsStoreProducts>((set, get)=>({
    
    products: [],
    loading: false,
    close: false,
    isOpenBottomSheet: false,
    toggleBottomSheet: (state)=>{
        set({ isOpenBottomSheet: state})
    },
    setProducts: async (cartID)=>{

        cartID = Number(cartID)
        const {data, error} = await supabase
        .from("products_cart")
        .select(`*, customer(name, number_phone)`)
        .eq('cart_id', cartID)
        .order('id', {ascending: false})
        
        set({products: data || []})
    },
    addProduct: async ({cartID, customerID, products, exchange})=>{

        set({loading: true})
        const currentState = get()
        products.priceDolar = Number(products.priceDolar) 
        products.qtd = Number(products.qtd)
        products.priceAOA = (products.priceDolar * products.qtd) * Number(exchange)

        const {error, status} = await supabase.from('products_cart')
        .insert({
            ...products,
            cart_id: cartID,
            customer_id: customerID
        })
        console.log(error, 'errrrorrrrrr')
        if(status === 201){
            currentState.setProducts(cartID)
            currentState.toggleBottomSheet(false)
        }

        set({loading: false})
        console.log(error, status)
        
    }
}))