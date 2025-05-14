import { Menu, MenuItem } from '@mui/material'

const ProfileMenu = ({anchorEl , handleClose , open , handleLogout}) => {

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
        <MenuItem onClick={handleClose}>My Playlists</MenuItem>
        <MenuItem onClick={()=>{handleLogout();handleClose();}}>Logout</MenuItem>
    </Menu>
  )
}

export default ProfileMenu