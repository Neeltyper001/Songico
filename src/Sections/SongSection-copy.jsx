import { useState } from "react";
import apiCall from "../Services/api-client";
import DefaultRender from "../SongRenders/DefaultRender"
import SongRender from "../SongRenders/SongRender"
import { useRef } from "react"
import { Container, Grid } from "@mui/material";
import TrackCard from "../Components/TrackCard";


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
      <Container sx={{paddingY: 5}}>
        <Grid container spacing={2}>
            {
              [1,2,3,4,5,6,7,8].map((num)=>{
                return (
                  <Grid key={num} size={{xs: 12 , sm: 6, md: 4}}>
                     <TrackCard />
                  </Grid>
                )
              })
            }
        </Grid>
      </Container>
    )
}