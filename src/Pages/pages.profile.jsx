import { Alert, Box, Button, Container } from '@mui/material'
import React, { useContext } from 'react'

import UseApiStatus from '../hooks/useApiStatus'
import { useNavigate } from 'react-router-dom'
import FormFile from '../ui/FormFile'
import { UserProfileDataContext } from '../contexts/context.userProfileData'
import LoadingUi from '../ui/LoadingUi'
import { profilePictureController } from '../controller/controller.profile'

const Profile = () => {   
    const  [file , setFile] = React.useState(null);  
    const {apiStatus , setApiStatus} = UseApiStatus();
    const [alert, setAlert] = React.useState({status: false , severity: "", message: ""})
    // const navigate = useNavigate()
    const {profileImage,userId} = useContext(UserProfileDataContext)
    const [profileImageObj , setProfileImageObj] = React.useState({isChanged: false , profileImageToRender: profileImage})

    const updateMyDetails = async(e)=>{
        setApiStatus(prev => ({...prev, isLoading: true , isSuccess: false , isError: false}))
        e.preventDefault();
        try{
        setApiStatus(prev => ({...prev , isLoading: false , isSuccess: true , isError: false}))
         await profilePictureController(file,userId )
         setAlert(prev => ({...prev, status: true , severity: "success" , message: "Succesfully updated profile"}))
        }
        catch(e){    
            console.log(e.message)      
            setApiStatus(prev => ({...prev , isLoading: false, isSuccess: false , isError: true}))
            setAlert(prev=>({...prev , status: true , severity: "error", message: "Couldn't update the profile"}))
        }
    }

  return (
    <Container>
        {alert.status && <Alert severity={alert.severity} onClose={()=>{setAlert(prev =>  ({...prev, status: false , severity: "", message:"" }))}}>{alert.message}</Alert>}
        {apiStatus.isLoading && <LoadingUi />}
        <Box component="form" onSubmit={updateMyDetails} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>            
            <Box sx={{marginY: 3 , display: "flex" , flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                { !profileImageObj.isChanged && <Box component="img" src={profileImageObj.profileImageToRender} alt="Profile" sx={{height: "230px", width: "230px"}}/>}
                {  profileImageObj.isChanged && <Box component="img" src={profileImageObj.profileImageToRender} alt="Profile" sx={{height: "230px", width: "230px",marginBottom: 2 , borderRadius: "50%"}}/>}
                <FormFile setFile={setFile} setProfileImageObj={setProfileImageObj}/>
            </Box>                                    
            <Button disabled={false} variant="contained" sx={{marginY: 2}} type="submit">Update</Button>
        </Box>
    </Container>
  )
}

export default Profile