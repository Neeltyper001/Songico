import { ExecutionMethod } from "appwrite";
import { functions } from "../lib/appwrite";
import { signup } from "../lib/appwrite.signup"
import { createUser } from "../lib/appwrite.userDb";

export const signUpController = async (email,password)=>{
    try {
        const signUpResponse  = await signup(email,password);
        console.log(signUpResponse)
                // const result = await functions.createExecution(
                //         "6831ebf50005591c4910", // functionId
                //           `${signUpResponse.$id}`, // body (optional)   
                //         false, 
                //         ExecutionMethod.POST, // method (optional)
            
                //     );
                //     console.log(result)
        // const dbCreateUserResponse = await createUser({
        //     userId: '6832fb82001e32304740',
        //     profileImage: "",            
        // })
        // console.log(dbCreateUserResponse)
    } catch (error) {
        throw new Error(error.message)
    }
}