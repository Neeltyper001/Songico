import { West } from '@mui/icons-material'
import { Alert, Box, Button, Container, Grid, Typography } from '@mui/material'
import { useLoaderData, useNavigate } from 'react-router-dom'
import PlaylistTrack from '../Components/PlaylistTrack'
import UseApiStatus from '../hooks/useApiStatus';
import { useState } from 'react';
import LoadingUi from '../ui/LoadingUi';

const Playlists = () => {
  const [alert, setAlert] = useState({status: false, severity: "", message: ""});
   const {apiStatus, setApiStatus} = UseApiStatus();
  const playLists = useLoaderData();
  const navigate = useNavigate();
  return (
    <Container>
      { alert.status && <Alert onClose={()=>{setAlert(prev => ({...prev, status: false , severity: "", message: ""}))}} severity={alert.severity}>{alert.message}</Alert>}
      { apiStatus.isLoading && <LoadingUi />}
      <Button variant='text' onClick={()=>{navigate('/dashboard')}} startIcon={<West />} sx={{marginY: 2}}>Back to home</Button>
      {
        playLists.length === 0 &&
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography sx={{fontSize: "35px", fontWeight: "bold"}}>No Playlists</Typography>
            <Box component="img" src="/assets/illustrations/Music.gif" />
          </Box>
      }
      {
        playLists.length !== 0 &&
        <Grid container columnSpacing={5} rowSpacing={2} sx={{paddingY: 3}}>
          {
            playLists.map(({$id , trackId , artistName, trackName , coverImage}, index)=>{
              return (
                <Grid key={trackId} size={6} sx={{marginY: 2}}>
                  <PlaylistTrack documentId={$id} sNo={index+1} artistName={artistName} trackName={trackName} coverImage={coverImage} 
                    setAlert={setAlert}
                    setApiStatus={setApiStatus}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      }
    </Container>
  )
}

export default Playlists