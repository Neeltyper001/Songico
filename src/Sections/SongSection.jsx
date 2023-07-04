import { useState } from "react";
import apiCall from "../Services/api-client";
import DefaultRender from "../SongRenders/DefaultRender"
import SongRender from "../SongRenders/SongRender"
import { useRef } from "react"
export default function SongSection(props){    
  const [allSongs , setAllSongs] = useState([]);
  const artistName = useRef();
  function handleRendering(){
      async function getData(){
        const songData = await apiCall(artistName.current.value);
        setAllSongs(songData.results)                
      }
      getData();
    }        
    return(        
<div>
    <div className="flex justify-center items-center px-4 py-6">
    <label  className="block text-xl font-medium  text-gray-700">
    Artist Name
  </label>

  <input
    type="text"  
    ref = {artistName}  
    placeholder="Your fav artist"
    className="mx-4 w-1/4 rounded-md px-2 py-2 border-gray-200 shadow-lg sm:text-sm"
  />
  <button
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  onClick={ handleRendering}
>
  Search
</button>
    </div>
      {allSongs.length === 0 ? <DefaultRender playSong={props.main}/> : <SongRender songsData = {allSongs} playSong={props.main}/>}
</div>
    )
}