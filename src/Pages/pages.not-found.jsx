import { West } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <Container sx={{display: "flex" , justifyContent: "center", alignItems: "center"}}>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" , height: "100vh"}}>
            <Box component="img" src="/assets/illustrations/404error.png" sx={{height: {xs: "250px", sm: "500px"}, width: "auto"}}/>
            <Button variant="text" startIcon={<West />} onClick= {()=>{navigate('/')}}>Back to home page</Button>
        </Box>
    </Container>
  )
}

export default NotFound