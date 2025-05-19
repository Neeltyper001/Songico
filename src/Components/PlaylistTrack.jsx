import { Box, Button, Typography } from '@mui/material'
import { DEFAULT_COVER_IMAGE } from '../constants/constants.default'
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { removePlayListTrackController } from '../controller/controller.tracks';
import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserProfileDataContext } from '../contexts/context.userProfileData';


const PlaylistTrack = ({documentId , sNo,trackName , artistName , coverImage , setAlert , setApiStatus}) => {
   const userProfileData = useContext(UserProfileDataContext)
   const navigate = useNavigate();
  const handleDeletePlaylistTrack = async ()=>{
    try {      
      setApiStatus(prev => ({...prev, isLoading: true , isSuccess: false , isError: false}))
       await removePlayListTrackController(documentId)      
      setApiStatus(prev => ({...prev, isLoading: false , isSuccess: true , isError: false}))
      setAlert(prev => ({...prev, status: true , severity: "success" , message: "Succesfully deleted the track"}))
      navigate(`/dashboard/playlists/${userProfileData.userId}`)
    } catch (error) {
      setApiStatus(prev => ({...prev, isLoading: false , isSuccess: false , isError: true}))
      setAlert(prev => ({...prev, status: true , severity: "error" , message: `${error.message}`}))
    }
  }


  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center" , gap: 2}}>
        <Typography sx={{fontSize: "33px", fontWeight: "bold"}}>{`${sNo}.`}</Typography>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center" , alignItems: "center"}}>
            <Typography sx={{overflowY: "scroll", height: "50px", fontWeight: "bold" , fontSize: "28px" , textAlign: "center"}}>{trackName}</Typography>
            <Typography sx={{fontSize: "22px" , textAlign: "center"}}>{artistName}</Typography>
        </Box>
        <Box component="img" src={coverImage || DEFAULT_COVER_IMAGE} />
        <Button onClick={()=>{handleDeletePlaylistTrack()}} variant="contained" sx={{backgroundColor: red[300]}}><DeleteIcon /></Button>
    </Box>
  )
}



export default PlaylistTrack