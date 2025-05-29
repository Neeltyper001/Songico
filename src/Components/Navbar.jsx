import { Alert, Avatar, Box, Button, Container, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useContext } from 'react'
import ProfileMenu from './ProfileMenu'
import UseApiStatus from '../hooks/useApiStatus';
import { useNavigate } from 'react-router-dom';
import { deleteSession } from '../lib/appwrite.session';
import LoadingUi from '../ui/LoadingUi';
import { UserProfileDataContext } from '../contexts/context.userProfileData';

const Navbar = () => {
  const {apiStatus , setApiStatus} = UseApiStatus();
  const [alert , setAlert] = React.useState({status: false , severity: "" , message: ""})
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {profileImage} = useContext(UserProfileDataContext);
    const handleLogout = async ()=>{
            try {
                setApiStatus(prev => ({...prev, isLoading: true , isError: false , isSuccess: false }))
                const response = await deleteSession();
                setApiStatus(prev=>({...prev,isLoading: false , isError: false , isSuccess: true}))
                console.log(response)
                navigate('/' , {replace: true})
            } catch (error) {
                setApiStatus(prev => ({...prev, isLoading: false , isError: true , isSuccess: false}))
                setAlert(prev => ({...prev , status: true , severity: "error" , message: `${error.message}`}))
            }
        }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{padding: 2,  backgroundColor: blue[500]}}>
       { alert.status && <Alert onClose={()=>{setAlert(prev=> ({...prev,status: false , severity: "", message: ""}))}} severity={alert.severity} >{alert.message}</Alert> }
       { apiStatus.isLoading &&  <LoadingUi />}
        <Container sx={{paddingY: 2, display: "flex" , justifyContent: "space-between", alignItems: "center"}}>
            <Box>
                <Typography sx={{fontWeight: "bold", fontSize: "35px", color: "white"}}>SONGICO</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center" , alignItems: "center" , gap: 2}}>
              <Button 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar alt={`User`} src={profileImage} sx={{borderWidth: "3px", borderColor: "white"}}/>  
              </Button>             
              <ProfileMenu anchorEl={anchorEl} handleClose={handleClose} open={open}  handleLogout={handleLogout} />          
            </Box>
        </Container>
    </Box>
  )
}

export default Navbar