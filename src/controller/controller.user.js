import { DATABASE_ID, SONGICO_USER_COLLECTION_ID } from "../constants/constants.database"
import { DEFAULT_SONG_ICON_IMAGE_URL } from "../constants/constants.url"
import { databases } from "../lib/appwrite"
import { getUser } from "../lib/appwrite.userDb"
import { User } from "../models/models.user"

export const createUserIfNotExists = async (userId) =>{
    try {
        const songicoUserDb = await getUser(userId)        
        if(songicoUserDb.total === 0){

           const response = await databases.createDocument(
               DATABASE_ID,
               SONGICO_USER_COLLECTION_ID,
               userId,
               {
                userId,
                profileImage: DEFAULT_SONG_ICON_IMAGE_URL
               }
           )
           return new User(response)
        }
        
        else {
            const userData = songicoUserDb.documents[0];
            return new User(userData);
        }


    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}