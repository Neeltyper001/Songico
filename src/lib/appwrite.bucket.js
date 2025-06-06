import { BUCKET_ID } from "../constants/constants.database";
import { ID, storage } from "./appwrite";


export const uploadFile = async (file)=>{
        try {                                    
                const result = await storage.createFile(
                        BUCKET_ID, // bucketId
                        ID.unique(), // fileId
                        file, // file                   
            );
            return result;
        } catch (error) {
            console.log(error.message)
        }
}

export const getFile = async (userId)=>{
    try {
        const result = await storage.listFiles(
                BUCKET_ID, // bucketId,
                [],
               userId              
            );
        
        return result;
    } catch (error) {
        throw new Error({type: "GET", defaultAsset:'/assets/Images/default-song-icon.png'})
    }
}

export const getFileURL = (fileId)=>{
    try {        
        const result =  storage.getFileView(
            BUCKET_ID,
            fileId
        )
        
        return result.href
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteFile = async (fileId)=>{
    try {
          await storage.deleteFile(
                BUCKET_ID,
                fileId
            )
    } catch (error) {
        throw new Error(error.message)
    }
}