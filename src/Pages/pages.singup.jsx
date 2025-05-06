import { Box, Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import FormText from '../ui/FormText'
import FormPassword from '../ui/FormPassword'
import EmailIcon from '@mui/icons-material/Email';
import GoogleButton from '../ui/GoogleButton/GoogleButton';
import FormEmail from '../ui/FormEmail';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = React.useState({});
      const navigate = useNavigate()


      const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
      }
  return (
    <Container sx={{}}>
        <Box sx={{position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant='h4' sx={{position:"absolute", top: 25, left: 20, color: '#3751FE' , fontSize: "34px", fontWeight: "bold", zIndex: 4}}>Sign Up</Typography>
            <Container sx={{position:"relative",height: '500px' , display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', paddingX: 2 , background: 'transparent'}}>                
                    <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flexStart'}}>
                        <Box component={'img'} src="/assets/illustrations/signup.gif" sx={{display:{xs:"block",md: "none"}, height: "150px"}}/>  
                        <FormEmail setFormData={setFormData} variant={'standard'} label={'Email/Username'}  value={''} />
                        <FormPassword setFormData={setFormData} variant={'standard'} label={'Password'} value={''} />
                        <FormPassword setFormData={setFormData} variant={'standard'} label={'Confirm password'} value={''} />
                    <Box sx={{display: 'flex', gap:2, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flexStart', width: '100%'}}>
                        <Button variant="contained" color="primary" sx={{width: '100%', height: '45px', marginTop: 2}} onClick={()=>{console.log(formData)}}>Sign Up</Button>
                        <GoogleButton buttonTypeText="Signup"/>
                    <Typography sx={{marginY: 2, color: '#3751FE' , fontSize: "14px", fontWeight: "bold"}}>Already have an account? <Button variant='text' sx={{textDecoration: 'underline'}} onClick={()=>{navigate('/signin')}}>Sign in</Button></Typography>
                    </Box>                
                    </Box>
            </Container>
            <Container sx={{display: {xs:"none",md: "block"}}}>
                <Box component={'img'} src="/assets/illustrations/signup.gif"/>                                     
            </Container>
            {/* already have an account */}
        </Box>
    </Container>
  )
}

export default Signup