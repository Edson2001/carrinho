import { create } from "zustand";


interface propsState{
    state:{
        customers: []
    },
    setCustomer?: (customer: {})=> void
}

export const useCustomerStore = create<propsState>(set=>({
    state:{
        customers: []
    },
    setCustomer: ()=>{
        const data = [
            {
                title: 'Edson dos Santos',
                id: "1",
                subTitle: '9244545',
                rightTitle: '',
                rightSubTitle: ''
            },
            {
                title: 'Deusa oliveira',
                id: "2",
                subTitle: '9244545',
                rightTitle: '',
                rightSubTitle: ''
            }
        ]
        set({
            state:{
                customers: data
            }
        })
    }
}))