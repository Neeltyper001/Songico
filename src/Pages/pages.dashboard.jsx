import { useLoaderData } from 'react-router-dom'
import UseApiStatus from '../hooks/useApiStatus'
import LoadingUi from '../ui/LoadingUi'
import Navbar from '../Components/Navbar'
import SongSection from '../Sections/SongSection-copy'
import PlayWidget from '../Components/PlayWidget'
import { useState } from 'react'
import { TracksContext } from '../contexts/context.tracks'
import Searchbar from '../Components/Searchbar'


const Dashboard = () => {
    const trackData = useLoaderData();
    const {apiStatus , setApiStatus} = UseApiStatus();
    const [currentTrack, setCurrentTrack] = useState(null)    
    // so that search term could be made all the data of tracks is available to parent which can be used by children
    const [tracks , setTracks] = useState(trackData);
    const showTrackWidget = Boolean(currentTrack)

  return (
    <>
      <TracksContext.Provider value={{tracks , setTracks , setCurrentTrack, setApiStatus}}>
        <Navbar />
        <Searchbar />
        <SongSection />
        {showTrackWidget && <PlayWidget currentTrack={currentTrack}/>}         
        {apiStatus.isLoading && <LoadingUi />} 
      </TracksContext.Provider>
    </>
  )
}

export default Dashboard