import { getSession } from "../lib/appwrite.session"
import { createUserIfNotExists } from "../controller/controller.user";

export const fetchUserProfileData = async ()=>{  
    try {
        let $userId;
        const sessionResponse = await getSession();   
        $userId = sessionResponse.userId
        const  response = await createUserIfNotExists($userId)          
        return response
        
    } catch (error) {
        throw new Error(error.message)
    }
}