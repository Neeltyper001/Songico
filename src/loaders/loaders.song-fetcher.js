// They are for converting the songs that are being fetched into respective models

import { DEFAULT_SEARCH_TERM } from "../constants/constants.default";
import { Track } from "../models/models.tracks";
import apiCall from "../Services/api-client"

export const fetchTracks = async ()=>{
    try{
        const tracks = await apiCall(DEFAULT_SEARCH_TERM);     
        const {resultCount , results} = tracks
        console.log(results);
        const trackData = results.map((track)=>{
            return (
                new Track(track,resultCount)
            )
        })     
        return trackData;        
    }
    catch(error){
        throw new Error(`${error.message}`)
    }
    

}