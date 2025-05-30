import { signup } from "../lib/appwrite.signup"


export const signUpController = async (email,password)=>{
    try {
        const signUpResponse  = await signup(email,password);
        console.log(signUpResponse)
    } catch (error) {
        throw new Error(error.message)
    }
}