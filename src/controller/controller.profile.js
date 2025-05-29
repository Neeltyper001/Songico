import { BUCKET_ID, DATABASE_ID, SONGICO_USER_COLLECTION_ID } from "../constants/constants.database";
import { databases, ID, storage } from "../lib/appwrite";
import { getFile, getFileURL, uploadFile } from "../lib/appwrite.bucket";
import { signup } from "../lib/appwrite.signup"
import { getUser, updateProfileImage } from "../lib/appwrite.userDb";


export const profilePictureController = async (file, userId, profileImageId)=>{
    try{
        console.log(file)
        if(!file){
            throw new Error("Empty file cannot be uploaded");
        }
        
        const result = await storage.listFiles(
            BUCKET_ID,
            [],
            userId
        )
        console.log(result)
        if(result.total === 0){
          const response =   await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                file
            )

            const profileImageURL = storage.getFileView(
                BUCKET_ID,
                response.$id
            )            

            await databases.updateDocument(
                DATABASE_ID,
                SONGICO_USER_COLLECTION_ID,
                userId,
                {
                    profileImage: profileImageURL.href,
                    profileImageId: response.$id
                }
            )            
        }

        else{
            // deletes the file
            await storage.deleteFile(
                BUCKET_ID,
                profileImageId
            )

            // creates the file

           const response =  await storage.createFile(
                BUCKET_ID,                
                ID.unique(),
                file
            )
            // get the URL
            const profileImageUrl = storage.getFileView(
                BUCKET_ID,
                response.$id
            )
            
            // update the user document
             await databases.updateDocument(
                DATABASE_ID,
                SONGICO_USER_COLLECTION_ID,
                userId,
                {
                    profileImage: profileImageUrl.href,
                    profileImageId: response.$id
                }
             )
        }
        // return response
    }
    catch(error){
        throw new Error(error.message)
    }
}

