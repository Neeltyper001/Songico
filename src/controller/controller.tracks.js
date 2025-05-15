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