import { Alert, Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import FormPassword from '../ui/FormPassword'
import GoogleButton from '../ui/GoogleButton/GoogleButton';
import FormEmail from '../ui/FormEmail';
import { useNavigate } from 'react-router-dom';
import { signup } from '../lib/appwrite.signup.js';
import UseApiStatus from '../hooks/useApiStatus';
import LoadingUi from '../ui/LoadingUi.jsx';
import { oAuthSignin } from '../lib/appwrite.OAuth.js';

const Signup = () => {
    const [formData, setFormData] = React.useState({});
    const [formError, setFormError] = React.useState(false)
    const {apiStatus , setApiStatus} = UseApiStatus();
    const [alert, setAlert] = React.useState({status: false , severity: "", message: ""})

      const navigate = useNavigate()      

      // handleFormSubmit
      const handleSubmit = async (e)=>{  
      try {
            setApiStatus(prev => ({...prev, isLoading: true , isSuccess: false, isError: false}))
            // console.log(apiStatus)
            e.preventDefault()    
            // console.log(formData)            
            const {email , password, confirmPassword} = formData

            if(password !== confirmPassword){
              throw new Error("Password and Confirm Password doesn't match")
            }
             await signup(email , password) 
            setApiStatus(prev=>({...prev, isSuccess: true , isLoading: false, isError: false}))            
            setAlert(prev => ({...prev, status: true, severity: "success", message: "Successfully created an account"}))
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
                    <Typography variant='h4' sx={{position:"absolute", top: 25, left: 20, color: '#3751FE' , fontSize: "34px", fontWeight: "bold", zIndex: 4}}>Sign Up</Typography>
            <Container sx={{position:"relative",height: '500px' , display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', paddingX: 2 , background: 'transparent'}}>                
                    <Box component={'form'} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flexStart'}}>
                        <Box component={'img'} src="/assets/illustrations/signup.gif" sx={{display:{xs:"block",md: "none"}, height: "150px" , width: "200px" , alignSelf: "center"}}/>  
                        <FormEmail setFormData={setFormData} setFormError={setFormError} variant={'standard'} label={'Email'}  value={''} />
                        <FormPassword setFormData={setFormData} setFormError={setFormError} variant={'standard'} label={'Password'} value={''} />
                        <FormPassword setFormData={setFormData} setFormError={setFormError} variant={'standard'} label={'Confirm password'} value={''} />
                    <Box sx={{display: 'flex', gap:2, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flexStart', width: '100%'}}>
                        <Button type='submit' variant="contained" color="primary" sx={{width: '100%', height: '45px', marginTop: 2}} disabled={formError ? true : false}>Sign Up</Button>
                        <GoogleButton handleGoogleButton={handleGoogleButton} buttonTypeText="Signup"/>
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