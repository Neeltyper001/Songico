import { Button } from '@mui/material';
import React, { useContext } from 'react'
import styled from 'styled-components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { camelCaseFormat } from '../utils/camelCase';
import { renderImage } from '../utils/renderProfileImageChange';
import { UserProfileDataContext } from '../contexts/context.userProfileData';
import { createFile } from '../utils/createFile';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FormFile = ({setFile , setProfileImageObj}) => { 
  const {userId} = useContext(UserProfileDataContext)
 const changeValue = async (event)=>{    
   const modifiedFile = createFile(event.target.files[0] , userId )
   setFile(modifiedFile)
   const URL = await renderImage(modifiedFile)          
   setProfileImageObj(prev => ({...prev,isChanged: true , profileImageToRender: URL}));
 }
  return (
     <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}       
    >
      Change Photo
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => {console.log(event.target.files[0]); changeValue(event)}}
        multiple
      />
    </Button>
  )
}

export default FormFile