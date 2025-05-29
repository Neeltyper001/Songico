import { ID } from "appwrite";
import {account} from "./appwrite.js";

export const signup = async (email, password) => {
    try {
        console.log(email)
        console.log(password)
        const response = await account.create(ID.unique(), email, password);
        return response;
    } catch (error) {
        console.error("Error signing up:", error.message);
        throw new Error(error.message)      
    }
}