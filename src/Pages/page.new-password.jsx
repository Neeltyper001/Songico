import React from 'react'
import { Box, Button, Paper, Alert, Typography } from '@mui/material'
import { newPassword } from '../lib/appwrite.password-recovery'
import FormPassword from '../ui/FormPassword'
import { useNavigate, useSearchParams } from 'react-router-dom'
import UseApiStatus from '../hooks/useApiStatus'
import LoadingUi from '../ui/LoadingUi'

const NewPassword = () => {
      const [formData, setFormData] = React.useState({})
      const [formError, setFormError] = React.useState(false)
      const {apiStatus, setApiStatus} = UseApiStatus();
      const [alert, setAlert] = React.useState({status: false , severity: "", message: ""})
      const [params] = useSearchParams();
      const navigate = useNavigate()

      const handleSubmit = async (e)=>{
        try {
            setApiStatus(prev => ({...prev, isSuccess: false , isError: false , isLoading: true}))
            e.preventDefault()
            const response = await newPassword(params.get("userId"),params.get("secret"),formData.newPassword)    
            setApiStatus(prev => ({...prev , isLoading: false , isError: false , isSuccess: true}))                    
        } catch (error) {            
            setApiStatus(prev => ({...prev, isLoading: false , isError: true , isSuccess: false}))
            navigate('/error')
        }
      }
    
      
  return (
    <>
        {apiStatus.isLoading && <LoadingUi />}
        {alert.status && <Alert onClose={()=>{setAlert(prev => ({...prev, status: false , severity: "", message: ""}))}} severity={alert.severity}>{alert.message}</Alert>}
        <Box sx={{paddingY: 10, display: "flex" , justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={4} sx={{paddingX: 4, display: 'flex', flexDirection: {xs: 'column', md: "row"}, justifyContent: "center" , alignItems: "center", width: {xs: "500px",md:"fit-content"}}}>
                { !apiStatus.isLoading && !apiStatus.isError && !apiStatus.isSuccess &&
                    <>
                        <Box component="img" src="/assets/illustrations/new-password.gif" sx={{ boxSizing: "border-box",  height: {xs: "300px" , md: "auto"}, width:{xs: "300px", md: "auto"}}}/>
                        <Box onSubmit={handleSubmit} component="form" sx={{paddingY: 4,display: 'flex', flexDirection: "column", justifyContent: "center", gap: 3 , alignItems: "flex-start"}}>
                            <FormPassword variant="standard" label="New Password" setFormData={setFormData} setFormError={setFormError} value=""/>
                            <Button type="submit" variant="contained">Register new Password</Button>
                        </Box>                    
                    </>
                }
                { apiStatus.isSuccess && 
                    <>
                        <Box component="img" src="/assets/illustrations/success.png" sx={{ boxSizing: "border-box",  height: {xs: "200px", md: "400px"}, width:{xs: "200px", md: "auto"}}}/>
                        <Box sx={{paddingY: 4,display: 'flex', flexDirection: "column", justifyContent: "center", gap: 3 , alignItems: "center"}}>
                            <Typography sx={{fontSize: "36px" , color: "##3751FE" , textAlign: "center"}}>Yay! created new password</Typography>
                            <Button type="button" onClick={()=>{navigate('/signin')}} variant="contained">Back to signin</Button>
                        </Box>                    
                    </>
                }
            </Paper>
        </Box>    
    </>
  )
}

export default NewPassword