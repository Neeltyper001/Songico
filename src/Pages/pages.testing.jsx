/**
 * 
 * This PAGE IS PURELY FOR TESTING PURPOSE. ANYTHING TO TEST OR EXPERIMENT THIS IS THE PAGE FOR IT. IT WON'T BE
 * AVAILABLE IN LIVE VERSION BUT CAN BE USED IN DEV MODE
 * 
 */

import { Alert, Box, Button } from '@mui/material';
import { ID } from "appwrite";
import { client, databases } from "../lib/appwrite";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import { Storage } from "appwrite";
import UseApiStatus from '../hooks/useApiStatus';
import LoadingUi from '../ui/LoadingUi';
import { DATABASE_ID } from '../constants/constants.database';
import { DEFAULT_SONG_ICON_IMAGE_URL } from '../constants/constants.url';

const Testing = () => {
    const [val, setVal] = React.useState();
    const [fileId , setFileId] = React.useState("");
    const {apiStatus, setApiStatus} = UseApiStatus();
    const [alert , setAlert] = useState({status: false, severity: "" , message: ""})

  const handleData = async (e)=>{
        try {
                e.preventDefault()
                const storage = new Storage(client);
    
                const result = await storage.createFile(
                        '682c9377002a7f86e16e', // bucketId
                        ID.unique(), // fileId
                        val, // file                   
            );
            console.log(result)
            setFileId(result.$id)
} catch (error) {
        console.log(error.message)
}
  }

    const handleUpdate = async ()=>{
        try {

            const storage = new Storage(client);
            const result = await storage.updateFile(
                '682c9377002a7f86e16e', // bucketId
                fileId, // fileId
            );
            console.log(result)
        } catch (error) {
            console.log(error.message)
        }
    }

    const getFile = async ()=>{
         try {
            console.log(fileId)
            const storage = new Storage(client);
            const result =  storage.getFileView(
                '682c9377002a7f86e16e', // bucketId
                 fileId // fileId
            );

                console.log(result);
         } catch (error) {
            console.log(error.message)
         }
    }
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

    const createDocument = async ()=>{
        try {
            setApiStatus(prev => ({...prev , isLoading: true , isError: false , isSuccess: false}));
             
            // =========== CALL START =============
                const response = await databases.createDocument(
                    DATABASE_ID,
                    "684045160028ff6febf2",
                    ID.unique(),
                    {
                        userId: "cdlqfmsxwznbkeuhatyr",
                        profileImageId: "",
                        profileImage: DEFAULT_SONG_ICON_IMAGE_URL
                    },
                    []                    
                )
                console.log(response)
             setApiStatus(prev => ({...prev , isLoading: false , isError: false , isSuccess: true}));
             setAlert(prev => ({...prev , status: true , message: "Succesfully created document" , severity: "success"}))
            // =========== CALL END ==============
        } catch (error) {
            setApiStatus(prev => ({...prev , isLoading: false , isError: true , isSuccess: false}));
            setAlert(prev => ({...prev , status: true , message: error.message , severity: "error"}))
            console.log(error.message)
        }
    }
  return (
    <>       
          {apiStatus.isLoading && <LoadingUi />}   
          { alert.status && <Alert severity={alert.severity} onClose={()=>{setAlert(prev => ({...prev , status: false , message: "" , severity: ""}))}}>{alert.message}</Alert>}
          <Box onSubmit={handleData} component="form">
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload files
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) =>{ console.log(event.target.files); setVal(event.target.files[0]) }}
                        multiple
                     />
                </Button>
                <Button variant='contained' type='submit'>Submit</Button>
                <Button variant='contained' onClick={()=>{handleUpdate()}} type='button'>Update</Button>
                <Button variant='contained' onClick={()=>{getFile()}} type='button'>Get</Button>
                <Button variant='contained' onClick={()=>{createDocument()}} type='button'>Create</Button>
                
          </Box>
    </>
  )
}

export default Testing