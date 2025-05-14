import { Box, Card, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material'


export const TrackCard = ({coverImage,trackName,artistName}) => {
      const theme = useTheme();
  return (
 <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
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