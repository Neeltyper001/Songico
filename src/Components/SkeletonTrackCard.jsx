import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material'

const SkeletonTrackCard = () => {
  return (
    <Card>
        <CardContent>
            <Grid container>
                <Grid size={6} container>
                    <Box sx={{display: "flex" , justifyContent: "center", alignItems: "center"}}>
                        <Skeleton animation="wave" variant="text" />
                        <Skeleton animation="wave" variant="text" />
                    </Box>
                    <Box sx={{display: "flex" , justifyContent: "center", alignItems: "center"}}>
                        <Skeleton animation="wave" variant="circular" />
                        <Skeleton animation="wave" variant="circular" />
                        <Skeleton animation="wave" variant="circular" />
                    </Box>
                </Grid>
                <Grid size={6}>
                        <Skeleton animation="wave">
                            <img src="#" alt="" />
                        </Skeleton> 
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default SkeletonTrackCard