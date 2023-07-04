import SongCardUI from "../CardUi/SongCardUI"
import apiCall from "../Services/api-client"
import { useState } from "react"
import { useEffect } from "react"
export default function DefaultRender(props){      
  let songCards = undefined
  const [defaultData , setDefaultData] = useState([])
  useEffect(()=>{    
    async function getInitialData(){      
      const songData = await apiCall("Latest")      
      setDefaultData(songData.results)
    }
    getInitialData();
  },[])
    
    if(defaultData.length != 0){      
       songCards =  defaultData.map((currentSongObj, i)=>{               
        return(
        <>
          <SongCardUI
              key = {i}
              cover_image = {currentSongObj.artworkUrl100}
              track_name = {currentSongObj.trackName}
              artist_name = {currentSongObj.artistName}
              play_url = {currentSongObj.previewUrl}
              play_song = {props.playSong}
              />
        </>
          
          )
        })      
      }
      
 
    return(
        <>
      {defaultData.length === 0 ? 
        <h1 className="text-center text-2xl" > Songs are loading</h1>:
      <div className="grid grid-cols-3 p-4 gap-y-4 place-items-center sz1240:grid-cols-2 sz820:grid-cols-1">
      {songCards}
      </div>}
        </>
      

      )
    }
    
    //  <section className="bg-gray-50">
    //   <div
    //     className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
    //   >
    //     <div className="mx-auto max-w-xl text-center">
    //       <h1 className="text-3xl font-extrabold sm:text-5xl">
    //         Flow above horizon.
    //         <strong className="font-extrabold text-red-700 sm:block">
    //           Increase Conversion.
    //         </strong>
    //       </h1>
    
    //       <p className="mt-4 sm:text-xl/relaxed">
    //       Music can evoke emotions, boost mood, improve memory, aid in therapy, and connect people worldwide.
    //       </p>
    
    //     </div>
    //   </div>
    // </section> 