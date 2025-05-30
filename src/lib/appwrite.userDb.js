import { DATABASE_ID, SONGICO_USER_COLLECTION_ID } from "../constants/constants.database"
import { DEFAULT_SONG_ICON_IMAGE_URL } from "../constants/constants.url";
import { databases, ID, Query } from "./appwrite"

export const createUser = async (userId)=>{
    try {
        const result = await databases.createDocument(
            DATABASE_ID, // databaseId
            SONGICO_USER_COLLECTION_ID, // collectionId
            ID.unique(), // documentId
               {
                "userId": userId,
                "profileImage": DEFAULT_SONG_ICON_IMAGE_URL
               }, 
            );

        
        return result;
    } catch (error) {                 
        throw new Error(error.type)
    }
}

export const getUser = async (userId)=>{
    try {                
        const result = await databases.listDocuments(
            DATABASE_ID,
            SONGICO_USER_COLLECTION_ID,            
            [Query.equal('userId',[`${userId}`])]
        )
        return result;
    } catch (error) {
        console.log(error.type)
        throw new Error("NO_RESOURCE")
    }
}

export const updateProfileImage = async(userId,data)=>{
    try{
         await databases.updateDocument(
            DATABASE_ID,
            SONGICO_USER_COLLECTION_ID,
            userId,
            data
        )        
    }
    catch(error){
        throw new Error(error.message)
    }
    
}
