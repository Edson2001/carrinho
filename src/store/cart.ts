import { create } from "zustand";
import { supabase } from "@src/databases/supbase";

interface propsStoreCart{
    
    cart?: {}[],
    loading?: boolean
    isOpenBotomSheet?: boolean,
    toggleBottomSheet?: (state: boolean)=> void,
    setCart: ()=>void
    openCart: ({exchange, goal}: {exchange: number, goal?: number| string})=>void
}

export const useCartStore = create<propsStoreCart>((set, get)=>({
   
    cart: [],
    loading: false,
    isOpenBotomSheet: false,

    toggleBottomSheet: (state) =>{
        set({isOpenBotomSheet: state})
    },
    
    setCart: async ()=> {
        const {data, error, status} = await supabase
        .from("cart")
        .select().order('id', {ascending: false})
        console.log(data, 'data app')
        const cartItems = data.map(item=>{
            return {
                id: item.id,
                link: '/cart',
                title: `Câmbio: ${item.exchange}`,
                subTitle: `Abertura: ${item.created_at.split("T")[0]}`,
                rightTitle: `$${item.total_deolar ?? 0}`,
                rightSubTitle: `$${item.total_kz ?? 0}`,
                exchange: item.exchange
            }
        })
        set({cart: cartItems})
    },

    openCart: async ({exchange, goal})=>{
        
        exchange = Number(exchange)
        goal = Number(goal)
        const currentCart = get()
        set({loading: true} )
        
        const {error, status} = await supabase.from("cart").insert({
            exchange,
            goal
        })
        if(status === 201){
            currentCart.setCart()
            currentCart.toggleBottomSheet(false)
        }
        if(error)  throw new Error()
        set({loading: false})         
       
    }
})) 