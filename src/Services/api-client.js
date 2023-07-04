import axios from "axios";

export default async function apiCall(termName){      
    const response = await axios.get(`https://itunes.apple.com/search?term=${termName}&limit=25&country=in`)
    return  response.data
}