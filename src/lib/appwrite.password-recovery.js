import { RECOVERY_REDIRECT } from '../constants/constants.url.js'
import {account} from './appwrite.js'

export const passwordRecovery = async (email)=>{
    try {
        console.log(email)
        const response = await account.createRecovery(email , RECOVERY_REDIRECT)
        console.log(response)
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}

export const newPassword = async (USER_ID , SECRET,password)=>{
    try {
        const response = await account.updateRecovery(USER_ID,SECRET,password)
        console.log(response)
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}