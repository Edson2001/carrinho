import {create} from "zustand"

import { session } from "@src/databases/supbase/session"

interface userStoreType{

    state: {
        user?: {}
    },
    getUser?: ()=> void 

}

export const useUserStore = create<userStoreType>(store=>({
    state:{
        user: {}
    },
    getUser:  ()=>{
        session().then(data=>{
            store({
                state: {
                    user: data.user
                }
            })
        })
    }
})) 