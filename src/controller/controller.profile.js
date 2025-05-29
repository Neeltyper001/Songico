import { getFile, getFileURL, uploadFile } from "../lib/appwrite.bucket";
import { signup } from "../lib/appwrite.signup"
import { getUser, updateProfileImage } from "../lib/appwrite.userDb";


export const profilePictureController = async (file, userId)=>{
    try{
        console.log(file)
        if(!file){
            throw new Error("Empty file cannot be uploaded");
        }
        
        const result = await getFile(userId)  
        
         if(result.total === 0){
            const result = await uploadFile(file)            
            const URL = await getFileURL(result.$id)            
            const userDbResult = await getUser(userId)[0]
            console.log(userDbResult) 
            const response = await updateProfileImage(userId , {
                userId,
                profileImage: URL
            })

            console.log(response)
         }

         else{
            console.log("bla bal bla")
         }
        // return response
    }
    catch(error){
        throw new Error(error.message)
    }
}

