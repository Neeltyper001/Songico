import { getSession } from "../lib/appwrite.session"

export const fetchUserProfileData = async ()=>{

    
    try {
        const response = await getSession();        
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}