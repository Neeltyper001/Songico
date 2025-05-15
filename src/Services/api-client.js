import axios from "axios";
import { DEFAULT_SEARCH_TERM } from "../constants/constants.default";

export default async function apiCall(termName=DEFAULT_SEARCH_TERM){      
    const response = await axios.get(`https://itunes.apple.com/search?term=${termName}&limit=25&country=in`)
    return  response.data
}