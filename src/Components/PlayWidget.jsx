import { Box, Container, Typography } from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const PlayWidget = ({currentTrack}) => {
  return (
    <Box sx={{position: "sticky", bottom: 0}}>
      <Container sx={{ paddingY: 3,zIndex: 3, display: "flex" , justifyContent: "space-around", alignItems: "center",backgroundColor: "gray", height: "100px" ,borderRadius: "15px"}}>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:  "center"}}>
          <Typography sx={{fontSize: "25px" , fontWeight: "bold"}}>{currentTrack.trackName}</Typography>
          <Typography>{currentTrack.artistName}</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "center" , gap: 2, alignItems: "center"}}>
          <SkipNextIcon sx={{cursor: "pointer"}}/>
          <audio controls src={currentTrack.playUrl}></audio>
          <SkipPreviousIcon sx={{cursor: "pointer"}}/>
        </Box>
        <Box component="img" src={currentTrack.coverImage} sx={{height: "100%"}}/>
      </Container>
    </Box>
  )
}

export default PlayWidget