import {account} from './appwrite.js'

export const signin = async(email,password)=>{
    try {
        const response = await account.createEmailPasswordSession(email, password);
        return response
    } catch (error) {        
        throw new Error(`${error.message}`)
    }
}