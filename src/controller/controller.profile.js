import { deleteFile, getFile, getFileURL, uploadFile } from "../lib/appwrite.bucket";
import {  updateProfileImage } from "../lib/appwrite.userDb";


export const profilePictureController = async (file, userId, profileImageId)=>{
    try{
        // checks whether file exist        
        if(!file){
            throw new Error("Empty file cannot be uploaded");
        }
        // tries to fetch file from the appwrite
        const result = await getFile(userId)   
        console.log(result)
        // on the basis of result condition is made
        if(result.total === 0){
            const response =   await uploadFile(file)
            console.log(response)
            const profileImageURL =  getFileURL(response.$id)
            console.log(profileImageURL)
            await updateProfileImage(userId,{
                    profileImage: profileImageURL,
                    profileImageId: response.$id
            })          
        }

        else{
            // deletes the file
            await deleteFile(profileImageId)
            // creates the file
            const response = await uploadFile(file)
            // get the URL
            const profileImageURL = getFileURL(response.$id);            
            // update the user document
              await updateProfileImage(userId,{
                    profileImage: profileImageURL,
                    profileImageId: response.$id
                })
        }
        // return response
    }
    catch(error){
        throw new Error(error.message)
    }
}

