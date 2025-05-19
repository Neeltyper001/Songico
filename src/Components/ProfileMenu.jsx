import { Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { UserProfileDataContext } from '../contexts/context.userProfileData';
import { useContext } from 'react';

const ProfileMenu = ({anchorEl , handleClose , open , handleLogout}) => {
  const navigate = useNavigate();
  const {userId} = useContext(UserProfileDataContext)  

  return (
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          'aria-labelledby': 'basic-button',
        }}
    >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={()=>{handleClose(); navigate(`/dashboard/playlists/${userId}`)}}>My Playlists</MenuItem>
        <MenuItem onClick={()=>{handleLogout();handleClose();}}>Logout</MenuItem>
    </Menu>
  )
}

export default ProfileMenu