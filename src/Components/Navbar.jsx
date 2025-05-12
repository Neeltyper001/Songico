import { Avatar, Box, Container, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{padding: 2,  backgroundColor: blue[500]}}>
        <Container sx={{paddingY: 2, display: "flex" , justifyContent: "space-between", alignItems: "center"}}>
            <Box>
                <Typography sx={{fontWeight: "bold", fontSize: "35px", color: "white"}}>SONGICO</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center" , alignItems: "center" , gap: 2}}>
                <Link><Typography sx={{fontWeight: "bold", fontSize: "23px", color:  "white"}}>My Playlists</Typography></Link>
                <Avatar>H</Avatar>
            </Box>
        </Container>
    </Box>
  )
}

export default Navbar