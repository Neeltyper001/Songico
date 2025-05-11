import {Container, Box, Button, Paper, Alert } from '@mui/material'
import React from 'react'
import FormEmail from '../ui/FormEmail'
import { passwordRecovery } from '../lib/appwrite.password-recovery'
import UseApiStatus from '../hooks/useApiStatus'
import LoadingUi from '../ui/LoadingUi'

import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom'

const RecoveryPassword = () => {
      const [formData, setFormData] = React.useState({})
      const [formError, setFormError] = React.useState(false)
      const [alert, setAlert] = React.useState({status: false , severity: "", message: ""})      
      const {apiStatus , setApiStatus} = UseApiStatus();
      const navigate = useNavigate();
      const handleSubmit = async (e)=>{
        try {
            setApiStatus(prev => ({...prev, isSuccess: false , isError: false , isLoading: true}))
            e.preventDefault()
            const response = await passwordRecovery(formData.email)
            setApiStatus(prev => ({...prev , isLoading: false , isError: false , isSuccess: true}))
            setAlert(prev => (prev, ({...prev, status:true , severity: "success", message: "A recovery link has been sent to the provided mail"})))      
        } catch (error) {
            setApiStatus(prev => ({...prev, isLoading: false , isError: true , isSuccess: false}))
            setAlert({status: true, severity: "error", message: `${error.message}`})
        }
      }
  return (
    <>
        {apiStatus.isLoading && <LoadingUi />}
        {alert.status && <Alert onClose={()=>{setAlert(prev => ({...prev, status: false , severity: "", message: ""}))}} severity={alert.severity}>{alert.message}</Alert>}
        <Box sx={{paddingY: 10, display: "flex" , flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={4} sx={{position:"relative",paddingX: 4, display: 'flex', flexDirection: {xs: 'column', md: "row"}, justifyContent: "center" , alignItems: "center", width: {xs: "fit-content", sm: "500px",md:"fit-content"}}}>
                <Container sx={{position: "absolute" , top: 15,}}>
                    <Button variant='text' startIcon={<WestIcon />} onClick={()=>{navigate('/')}}> Back to Home </Button>
                </Container>                
                <Box component="img" src="/assets/illustrations/forgot-password.gif" sx={{ boxSizing: "border-box",  height: {xs: "300px" , md: "auto"}, width:{xs: "300px", md: "auto"}}}/>
                <Box onSubmit={handleSubmit} component="form" sx={{paddingY: 4,display: 'flex', flexDirection: "column", justifyContent: "center", gap: 3 , alignItems: "flex-start"}}>
                    <FormEmail variant="standard" label="Email" setFormData={setFormData} setFormError={setFormError} value=""/>
                    <Button type="submit" variant="contained">Recover Password</Button>
                </Box>
            </Paper>
        </Box>    
    </>
  )
}

export default RecoveryPassword