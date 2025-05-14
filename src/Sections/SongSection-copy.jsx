import { Container, Grid } from "@mui/material";
import TrackCard from "../Components/TrackCard";
import SkeletonTrackCard from "../Components/SkeletonTrackCard";
import { useLoaderData } from "react-router-dom";


export default function SongSection({setCurrentTrack}){    
  const data = useLoaderData();
  console.log(data)
  

    return(        
      <Container sx={{paddingY: 5}}>
        <Grid container spacing={2}>
            {
              data.length === 0  && [1,2,3,4,5,6].map((count)=>{
                return (
                  <Grid key={count} sx={{justifyContent: "center"}}>
                    <SkeletonTrackCard key={count} />
                  </Grid>
                )
              })
            }
            {
              data.length !==0 && data.map(({coverImage,trackName,artistName,playUrl,trackId})=>{
                return (                  
                    <Grid component="div" onClick={()=>{setCurrentTrack({coverImage,trackName,artistName,playUrl})}} key={trackId} size={{xs: 12 , sm: 6 , md: 4}} sx={{placeItems: "center" , cursor: "pointer"}}>
                       <TrackCard coverImage={coverImage} trackName={trackName} artistName={artistName} playUrl={playUrl}/>
                    </Grid>
                )
              })
            }
        </Grid>
      </Container>
    )
}