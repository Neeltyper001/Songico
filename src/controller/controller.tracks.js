import { listAllPlaylist, removeFromPlaylist } from "../lib/appwrite.addToPlaylist";
import { Track } from "../models/models.tracks";
import apiCall from "../Services/api-client";

export const fetchTracksController = async(searchTerm)=>{
    try {
        const tracks = await apiCall(searchTerm);     
        const {resultCount , results} = tracks
        const tracksData = results.map((track)=>{
            return (
                new Track(track,resultCount)
            )
        })    
        return tracksData;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const fetchPlayListTracksController = async(userId)=>{
    try {
        const playListTracks = await listAllPlaylist(userId);  
        return  playListTracks.documents
    } catch (error) {
        throw new Error(error.message)
    }
}

export const removePlayListTrackController = async (userId)=>{
        try {
            const removedResponse = await removeFromPlaylist(userId)
            return removedResponse;
        } catch (error) {
            throw new Error(error.message)
        }
}