import {create} from "zustand"

import { session } from "@src/databases/supbase/session"

interface userStoreType{
    user?: {}
    getUser?: ()=> void 
}

export const useUserStore = create<userStoreType>(store=>({
    user: {},
    getUser:  ()=>{
        session().then(data=>{
            store({user: data.user})
        })
    }
})) 