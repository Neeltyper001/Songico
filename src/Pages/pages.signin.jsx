import React from 'react'
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import FormText from '../ui/FormText'
import FormPassword from '../ui/FormPassword'
import EmailIcon from '@mui/icons-material/Email';
import GoogleButton from '../ui/GoogleButton/GoogleButton';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const [formData, setFormData] = React.useState({})
    const navigate = useNavigate()
  return (
    <Container >
        <Box sx={{position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant='h4' sx={{position:"absolute", top: 25, left: 20, color: '#3751FE' , fontSize: "34px", fontWeight: "bold" ,zIndex: 2}}>Sign In</Typography>
            <Container sx={{position:"relative",height: '500px' , display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', paddingX: 2 , background: 'transparent'}}>                
                    <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flexStart'}}>
                        <Box component={'img'} src="/assets/illustrations/signup.gif" sx={{display:{xs:"block",md: "none"}, height: "150px"}}/>  
                        <FormText setFormData={setFormData} variant={'standard'} label={'Email/Username'} helperText={''} value={''} adornmentIcon={<EmailIcon sx={{color: "blue", mr: 1, my: 0.5 }} />}/>
                        <FormPassword setFormData={setFormData} variant={'standard'} label={'Password'} helperText={''} value={''} />                        
                    <Box sx={{display: 'flex', gap:2, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <Button variant="contained" color="primary" sx={{width: '100%', height: '45px', marginTop: 2}} onClick={()=>{console.log(formData)}}>Sign In</Button>
                        <GoogleButton buttonTypeText={"Signin"}/>
                    </Box>                
                    </Box>
                    <Typography sx={{marginY: 2, color: '#3751FE' , fontSize: "14px", fontWeight: "bold"}}>Don't have an account? <Button variant='text' sx={{textDecoration: 'underline'}} onClick={()=>{navigate('/signup')}}>Sign up</Button></Typography>
            </Container>
            <Container sx={{display: {xs:"none",md: "block"}}}>
                <Box component={'img'} src="/assets/illustrations/signin.gif"/>                                     
            </Container>
            
        </Box>
    </Container>
  )
}

export default Signin