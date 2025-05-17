import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const TrackCard = ({coverImage,trackName,artistName,saveTrack}) => {

  return (
 <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', position: "relative" }}>
          <Typography component="div" noWrap={true} variant='h5'  sx={{fontSize: "25px" , fontWeight: "bold" , width: "180px"}}>
            {trackName}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            noWrap={true}
            sx={{ color: 'text.secondary', width: "100px" }}
          >
            {artistName}
          </Typography>
          <Button onClick={async ()=>{console.log("Click"); await saveTrack()}} sx={{position: "absolute", bottom: 0, left: 0}}><BookmarkIcon /></Button>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={coverImage}
        alt="Live from space album cover"
      />
    </Card>
  )
}

export default TrackCard