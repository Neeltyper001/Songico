import { signup } from "../lib/appwrite.signup"


export const signUpController = async (email,password)=>{
    try {
         await signup(email,password);
    } catch (error) {
        throw new Error(error.message)
    }
}