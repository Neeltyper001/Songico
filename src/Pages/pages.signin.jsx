import React from 'react'
import { Alert, Box, Button, Container,  Typography } from '@mui/material'
import FormPassword from '../ui/FormPassword'
import GoogleButton from '../ui/GoogleButton/GoogleButton';
import { useNavigate } from 'react-router-dom';
import FormEmail from '../ui/FormEmail'
import UseApiStatus from '../hooks/useApiStatus';
import LoadingUi from '../ui/LoadingUi';
import { signin } from '../lib/appwrite.signin';
import { oAuthSignin } from '../lib/appwrite.OAuth';
const Signin = () => {
  const [formData, setFormData] = React.useState({})
  const [formError, setFormError] = React.useState(false)
      const {apiStatus , setApiStatus} = UseApiStatus();
      const [alert, setAlert] = React.useState({status: false , severity: "", message: ""})
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
      try {
            e.preventDefault()                            
            console.log("Handle submit triggered")
            setApiStatus(prev => ({...prev, isLoading: true , isSuccess: false, isError: false}))            
            const {email , password} = formData
            await signin(email , password)                  
            navigate('/dashboard' , {replace: true})
            // setApiStatus(prev=>({...prev, isSuccess: true , isLoading: false, isError: false}))            
            // setAlert(prev => ({...prev, status: true, severity: "success", message: "Successfully Logged In account"}))
        } catch (error) {
            setApiStatus(prev=> ({...prev, isLoading: false, isError: true , isSuccess: false}))
            setAlert(prev => ({...prev, status: true, severity: "error", message: `${error.message}`}))
          }   
    }

    const handleGoogleButton = ()=>{
       try {
         const response = oAuthSignin();
         console.log(response)
       } catch (error) {
         console.log(error.message)
       }
    }


  return (
    <Container >
        {apiStatus.isLoading && <LoadingUi />}
        { alert.status  && <Alert onClose={()=>{setAlert(prev => ({...prev, status: false, severity: "", message: ""}))}} severity={alert.severity}>{alert.message}</Alert>}
        <Box sx={{position: 'relative', display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant='h4' sx={{position:"absolute", top: 25, left: 20, color: '#3751FE' , fontSize: "34px", fontWeight: "bold" ,zIndex: 2}}>Sign In</Typography>
            <Container sx={{position:"relative",height: '500px' , display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', paddingX: 2 , background: 'transparent'}}>                
                    <Box component={'form'} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flexStart'}}>
                        <Box component={'img'} src="/assets/illustrations/signup.gif" sx={{display:{xs:"block",md: "none"}, height: "150px"}}/>  
                        <FormEmail setFormData={setFormData} setFormError={setFormError} variant={'standard'} label={'Email'}  value={''} />
                        <FormPassword setFormData={setFormData} setFormError={setFormError} variant={'standard'} label={'Password'} value={''} />
                        <Button variant='text' type='button' onClick={()=>{navigate('/recovery')}}  sx={{color: '#3751FE', marginTop: 2 , fontSize: "14px", fontWeight: "bold"}}>Forgot password ?</Button>
                    <Box sx={{display: 'flex', gap:2, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <Button type="submit" variant="contained" color="primary" sx={{width: '100%', height: '45px', marginTop: 2}} disabled={formError ? true : false}>Sign In</Button>
                        <GoogleButton handleGoogleButton={handleGoogleButton} buttonTypeText={"Signin"}/>
                    </Box>                
                    
                    </Box>
                    <Typography sx={{marginY: 2, color: '#3751FE' , fontSize: "14px", fontWeight: "bold"}}>{`Don't have an account? `}<Button variant='text' sx={{textDecoration: 'underline'}} onClick={()=>{navigate('/signup')}}>Sign up</Button></Typography>
            </Container>
            <Container sx={{display: {xs:"none",md: "block"}}}>
                <Box component={'img'} src="/assets/illustrations/signin.gif"/>                                     
            </Container>
            
        </Box>
    </Container>
  )
}

export default Signin