import { create } from "zustand";
import { supabase } from "@src/databases/supbase";

interface propsState{
    state:{
        customers: [],
        loading?: boolean
    },
    setCustomer?: (customer: {})=> void
    createCustomer?: (customer: {name: string, number_phone: number | string})=> void
}

export const useCustomerStore = create<propsState>(set=>({
    state:{
        customers: [],
        loading: false
    },
    setCustomer: async ()=>{
        const {data, error} = await supabase.from('customer').select()
        
        const result = data.map(item=>{
            return {
                title: item.name,
                id: item.id,
                subTitle: item.number_phone,
                rightTitle: '',
                rightSubTitle: `Gasto: ${1}`,
            }
        })
        set({state:{customers: result}})
    },
    createCustomer: async (customer)=> {
        set({
            state:{loading: true}})
        try{
            const {status, error} = await supabase.from("customer").insert({
                name: customer.name,
                number_phone: customer.number_phone
            })
            console.log(status, error, 'status e errro')
        }catch(e){
            console.log(e)
        }finally{
            set({state:{loading: false}})
        }
    }
}))