import { create } from "zustand";
import { supabase } from "@src/databases/supbase";

interface propsState{

    customers: {}[],
    loading?: boolean,
    created?: boolean
    isBottomSheet?: boolean, 
    setCustomer?: (check?: boolean)=> void
    toggleBottomSheet?: (state: boolean)=> void,
    createCustomer?: (customer: {name: string, number_phone: number | string})=> void
}

export const useCustomerStore = create<propsState>((set, get)=>({
 
    customers: [],
    loading: false,
    isBottomSheet: false,
    created: false,
    
    toggleBottomSheet: (state)=>{
        set({
            isBottomSheet: state
        })
    },
    setCustomer: async ()=>{
        const {data, error} = await supabase.from('customer').select().order('id', {ascending: false})
        
        const result = data.map(item=>{
            return {
                title: item.name,
                id: item.id,
                subTitle: item.number_phone,
                rightTitle: '',
                rightSubTitle: `Gasto: ${1}`,
            }
        })
        set({customers: result})
    },
    createCustomer: async (customer)=> {
        set({loading: true})
        
        const currentState = get()
        
        const {status, error} = await supabase.from("customer").insert({
            name: customer.name,
            number_phone: customer.number_phone
        })

        if(status === 201) {
            set({loading: false, created: true })
            currentState.toggleBottomSheet(false)
            currentState.setCustomer()
            return
        }
        set({loading: false})
        if(error) throw new Error(error.message)        
    }
}))