import {  DATABASE_ID, SONGICO_TRACK_COLLECTION_ID } from "../constants/constants.database"
import { databases, ID, Query } from "./appwrite"

export const saveToPlaylist = async (data)=>{
    try {
        const response = await databases.createDocument(
            DATABASE_ID,
            SONGICO_TRACK_COLLECTION_ID,
            ID.unique(),
            data
        )
        return response;
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}


export const removeFromPlaylist = async (documentId)=>{
    try {
       const result = await databases.deleteDocument(
                DATABASE_ID, // databaseId
                SONGICO_TRACK_COLLECTION_ID, // collectionId
                documentId // documentId
        );
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}
export const emptyPlaylist = async ()=>{}
export const listAllPlaylist = async (userId)=>{
        try {
       const result = await databases.listDocuments(
                DATABASE_ID, // databaseId
                SONGICO_TRACK_COLLECTION_ID, // collectionId       
                [
                    Query.equal('userId',[userId])
                ]         
        );
        return result
    } catch (error) {
        throw new Error(error.message)
    }
}