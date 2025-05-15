// They are for converting the songs that are being fetched into respective models
import { fetchTracksController } from "../controller/controller.tracks";


export const fetchTracksLoader = async ()=>{
    try{        
        return await fetchTracksController()        
    }
    catch(error){
        throw new Error(`${error.message}`)
    }
    
}