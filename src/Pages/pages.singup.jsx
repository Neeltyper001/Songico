import { Box, Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import FormText from '../ui/FormText'
import FormPassword from '../ui/FormPassword'
import EmailIcon from '@mui/icons-material/Email';
import GoogleButton from '../ui/GoogleButton/GoogleButton';

const Signup = () => {
    const [formData, setFormData] = React.useState({})
  return (
    <Container sx={{}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container sx={{position:"relative",height: '500px' , display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', paddingX: 2 , background: 'transparent'}}>                
                    <Typography variant='h4' sx={{position:"absolute", top: 5, left: 20, color: '#3751FE' , fontSize: "34px", fontWeight: "bold"}}>Sign Up</Typography>
                    <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flexStart'}}>
                        <Box component={'img'} src="/assets/illustrations/signup.gif" sx={{display:{xs:"block",md: "none"}, height: "150px"}}/>  
                        <FormText setFormData={setFormData} variant={'standard'} label={'Email/Username'} helperText={''} value={''} adornmentIcon={<EmailIcon sx={{color: "blue", mr: 1, my: 0.5 }} />}/>
                        <FormPassword setFormData={setFormData} variant={'standard'} label={'Password'} helperText={''} value={''} />
                        <FormPassword setFormData={setFormData} variant={'standard'} label={'Confirm password'} helperText={''} value={''} />
                    </Box>
                    <Container sx={{display: 'flex', gap:2, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingX: 2}}>
                        <Button variant="contained" color="primary" sx={{width: '100%', height: '45px', marginTop: 2}} onClick={()=>{console.log(formData)}}>Sign Up</Button>
                        <GoogleButton />
                    </Container>                
            </Container>
            <Container sx={{display: {xs:"none",md: "block"}}}>
                <Box component={'img'} src="/assets/illustrations/signup.gif"/>                                     
            </Container>
        </Box>
    </Container>
  )
}

export default Signup