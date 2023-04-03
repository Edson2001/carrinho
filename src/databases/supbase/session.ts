import { supabase } from ".";

export const session = async ()=>{
    const {data} = await supabase.auth.getSession()
    return data.session
}