import { create } from "zustand";
import { supabase } from "@src/databases/supbase";

interface propsStoreCart{
    state: {
        cart?: {}[],
        loading?: boolean
    }
    setCart: ()=>void
    openCart: ({exchange, goal}: {exchange: number, goal?: number| string})=>void
}

export const useCartStore = create<propsStoreCart>((set, get)=>({
    state: {
        cart: [],
        loading: false
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
        set({
            state:{
                cart: cartItems
            }
        })
    },

    openCart: async ({exchange, goal})=>{
        try{
            exchange = Number(exchange)
            goal = Number(goal)
            set({state:{loading: true} })
            
            const {error, status} = await supabase.from("cart").insert({
                exchange,
                goal
            })
            if(error)  throw new Error()
            set({state:{loading: false}})         
        }catch(e){
            console.log(e, 'erro do try')
        }
    }
})) 