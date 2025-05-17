import { useLoaderData, useLocation } from 'react-router-dom'
import UseApiStatus from '../hooks/useApiStatus'
import LoadingUi from '../ui/LoadingUi'
import SongSection from '../Sections/SongSection-copy'
import PlayWidget from '../Components/PlayWidget'
import { useState } from 'react'
import { TracksContext } from '../contexts/context.tracks'
import { UserProfileDataContext } from '../contexts/context.userProfileData'
import Searchbar from '../Components/Searchbar'
import { Alert } from '@mui/material'


const Dashboard = () => {
    const trackData = useLoaderData();
    const {apiStatus , setApiStatus} = UseApiStatus();
    const [currentTrack, setCurrentTrack] = useState(null)    
    // so that search term could be made all the data of tracks is available to parent which can be used by children
    const [tracks , setTracks] = useState(trackData);
    const showTrackWidget = Boolean(currentTrack)
    const location = useLocation();
    const [alert , setAlert] = useState({status: false , severity: "", message: ""});

  return (
    <>    
    <UserProfileDataContext.Provider value={location.state} >
      <TracksContext.Provider value={{tracks , setTracks , setCurrentTrack, setApiStatus,setAlert}}>     
       {alert.status && <Alert onClose={()=>{setAlert(prev => ({...prev , status: false , severity: "" , message: ""}))}} severity={alert.severity}>{alert.message}</Alert>} 
        <Searchbar />
        <SongSection />
        {showTrackWidget && <PlayWidget currentTrack={currentTrack}/>}         
        {apiStatus.isLoading && <LoadingUi />} 
      </TracksContext.Provider>
    </UserProfileDataContext.Provider>
    </>
  )
}

export default Dashboard