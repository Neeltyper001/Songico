import { createUser, getUser } from "../lib/appwrite.userDb"
import { User } from "../models/models.user"

export const createUserIfNotExists = async (userId) =>{
    try {
        const songicoUserDb = await getUser(userId)       
        if(songicoUserDb.total === 0){            

           const response = await createUser(userId)
           return new User(response)
        }
        
        else {

            const userData = songicoUserDb.documents[0];
            return new User(userData);
        }


    } catch (error) {
        console.log(error)
        console.log(error.message)
        throw new Error(error.message)
    }
}