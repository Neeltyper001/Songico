import {account} from './appwrite.js'

export const signin = async(email,password)=>{
    try {
        const response = await account.createEmailPasswordSession(email, password);
        console.log(response)
    } catch (error) {
        console.log(error)
        throw new Error(`${error.message}`)
    }
}