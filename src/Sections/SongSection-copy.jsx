import { Container, Grid } from "@mui/material";
import TrackCard from "../Components/TrackCard";
import SkeletonTrackCard from "../Components/SkeletonTrackCard";
import { useContext } from "react";
import { TracksContext } from "../contexts/context.tracks";
import { saveToPlaylist } from "../lib/appwrite.addToPlaylist";

export default function SongSection(){    
  const {tracks, setCurrentTrack , setApiStatus , setAlert} = useContext(TracksContext);
  const generateSaveTrack = (trackObj)=>{

     return (
       async () =>{
          try {
            setApiStatus(prev => ({...prev , isLoading: true, isSuccess: false , isError: false}))
            const response = await saveToPlaylist(trackObj);
            setApiStatus(prev => ({...prev, isLoading: false , isSuccess: true , isError: false}))
            setAlert(prev=>({...prev, status : true , severity: "success" , message: "Successfully saved the track to collection"}))
            console.log(response)            
          } catch (error) {
            setApiStatus(prev=>({...prev, isLoading: false , isSuccess: false , isError: true}))
            setAlert(prev=>({...prev, status : true , severity: "error" , message: `${error.message}`}))
            throw new Error(error.message)
          }
       }
     )

  }
    return(        
      <Container sx={{paddingY: 5}}>
        <Grid container spacing={2}>
            {
              tracks.length === 0  && [1,2,3,4,5,6].map((count)=>{
                return (
                  <Grid key={count} sx={{justifyContent: "center"}}>
                    <SkeletonTrackCard key={count} />
                  </Grid>
                )
              })
            }
            {
              tracks.length !==0 && tracks.map(({coverImage,trackName,artistName,playUrl,trackId})=>{
                return (                  
                    <Grid component="div" onClick={()=>{setCurrentTrack({coverImage,trackName,artistName,playUrl})}} key={trackId} size={{xs: 12 , sm: 6 , md: 4}} sx={{placeItems: "center" , cursor: "pointer"}}>
                       <TrackCard saveTrack={generateSaveTrack({coverImage, trackName, artistName, playUrl, trackId})} coverImage={coverImage} trackName={trackName} artistName={artistName} playUrl={playUrl}/>
                    </Grid>
                )
              })
            }
        </Grid>
      </Container>
    )
}