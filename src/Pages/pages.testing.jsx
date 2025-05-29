import { Box, Button } from '@mui/material';
import { ExecutionMethod, Functions, ID } from "appwrite";
import { client } from "../lib/appwrite";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import React from 'react'
import { Storage } from "appwrite";

const Testing = () => {
    const [val, setVal] = React.useState();
    const [fileId , setFileId] = React.useState("");
      const sendData = async ()=>{
        const obj = {name: "my-name", value: "foo"};
        const functions = new Functions(client);

        const result = await functions.createExecution(
                "6831ebf50005591c4910", // functionId
                `${JSON.stringify(obj)}`, // body (optional)   
                false, 
                ExecutionMethod.POST, // method (optional)
    
            );
            console.log(result)
            
        } 

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
  return (
    <>
          <Button variant={"contained"} onClick={sendData}>Send Data</Button>
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
          </Box>
    </>
  )
}

export default Testing