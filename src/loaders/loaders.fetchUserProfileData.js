import { AppwriteException } from "appwrite";
import { getSession } from "../lib/appwrite.session"
import { createUser, getUser } from "../lib/appwrite.userDb";
import { User } from "../models/models.user";
import { DEFAULT_SONG_ICON_IMAGE_URL } from "../constants/constants.url";

export const fetchUserProfileData = async ()=>{  
    let $userId;
    try {
        const sessionResponse = await getSession();    
        $userId = sessionResponse.userId    
        const songicoUserDb = await getUser($userId)
        
        return songicoUserDb.total === 0 ? {userId: $userId, profileImagefileId: "", profileImage: DEFAULT_SONG_ICON_IMAGE_URL } : {userId: $userId , profileImageFileId: songicoUserDb.documents[0].profileImageFileId, profileImage: songicoUserDb.documents[0].profileImage}
        
    } catch (error) {
        throw new Error(error.message)
    }
}