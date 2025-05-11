
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SomethingWentWrong = () => {
    const navigate = useNavigate();
  return (
    <Container sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Box component="img" src="/assets/illustrations/error.png" sx={{ boxSizing: "border-box",  height: {xs: "300px" }, width:{xs: "300px", md: "auto"}}}/>
        <Box  sx={{paddingY: 4,display: 'flex', flexDirection: "column", justifyContent: "center", gap: 3 , alignItems: "center"}}>
            <Typography sx={{fontSize: "36px", color: "#3751FE", textAlign: "center"}}>Oops Something went wrong !</Typography>
            <Button type="button" onClick={()=>{navigate('/')}} variant="contained">Back to Home Page</Button>
        </Box>   
    </Container>
  )
}

export default SomethingWentWrong