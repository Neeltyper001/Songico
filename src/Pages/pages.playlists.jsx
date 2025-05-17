import { West } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Playlists = () => {
  const arr = []
  const navigate = useNavigate();
  return (
    <Container>
      <Button variant='text' onClick={()=>{navigate('/dashboard')}} startIcon={<West />}>Back to home</Button>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Typography sx={{fontSize: "35px", fontWeight: "bold"}}>No Playlists</Typography>
      <Box component="img" src="/assets/illustrations/Music.gif" />
      </Box>
    </Container>
  )
}

export default Playlists