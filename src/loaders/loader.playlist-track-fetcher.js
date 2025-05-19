import { fetchPlayListTracksController } from "../controller/controller.tracks";

export const fetchPlayListTracks= async({params})=>{
    try {        
        const playListTracks =  await fetchPlayListTracksController(params.userId); 
        return playListTracks
    } catch (error) {
        throw new Error(error.message)
    }
}