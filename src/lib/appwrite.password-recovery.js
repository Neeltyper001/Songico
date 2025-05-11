import { NEW_PASSWORD } from '../constants/constants.url.js'
import {account} from './appwrite.js'

export const passwordRecovery = async (email)=>{
    try {        
        const response = await account.createRecovery(email , NEW_PASSWORD)        
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}

export const newPassword = async (USER_ID , SECRET,password)=>{
    try {
        const response = await account.updateRecovery(USER_ID,SECRET,password)        
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}