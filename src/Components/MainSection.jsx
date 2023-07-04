import { useState } from "react"
import DefaultSection from "../Sections/DefaultSection"
import SongSection from "../Sections/SongSection"
import PlayCardUI from "../CardUi/PlayCardUI";
export default function MainSection(){
     
    const [toggleSections, setToggleSections] = useState(true);
    const [togglePlayer , setTogglePlayer] = useState({
        toggleStatus : false,
        toggleCoverImage : '',
        toggleTrackName: '',
        toggleArtistName: '',
        togglePlayUrl: ''
    })
        function handleToggleBack(){            
            setTogglePlayer(()=>{
                return {
                    ...togglePlayer,
                    toggleStatus: false,
                    toggleCoverImage : '',
                    toggleTrackName: '',
                    toggleArtistName: '',
                    togglePlayUrl: ''
                }
            })
        }
        function handleToggleSections(){
            setToggleSections(prevToggleSections => !prevToggleSections)
        }
        function handleTogglePlayer(obj){
            setTogglePlayer(()=>{                
                return {   ...togglePlayer,
                    toggleStatus: true,
                    toggleCoverImage: obj.cover_image, 
                    toggleTrackName: obj.track_name, 
                    toggleArtistName: obj.artist_name, 
                    togglePlayUrl: obj.play_url
                }
            }
            )
        }        
    return(
        <>
        { togglePlayer.toggleStatus ? <PlayCardUI toggle_player={togglePlayer} toggle_back={handleToggleBack}/>  : toggleSections? <DefaultSection handleToggleSectionsDefault = {handleToggleSections}/> : <SongSection main={handleTogglePlayer}/> }        
        </>
    )
}