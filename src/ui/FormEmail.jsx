import { Box, InputAdornment, inputAdornmentClasses, TextField } from '@mui/material'
import React from 'react'
import { camelCaseFormat } from '../utils/camelCase'
import EmailIcon from '@mui/icons-material/Email';

const FormEmail = ({variant,label,  value, setFormData}) => {
    const [email, setText] = React.useState(value)   
    const [error, setError] = React.useState({status: false, message: ""})

    const changeValue = (event) => {
        setText(event.target.value);
        setFormData(prev=>({...prev, [camelCaseFormat(label)]: event.target.value}))
    }

    const handleBlur = ()=>{
      if(!email.trim()){
         setError(prev=> ( {...prev, status: true, message: "This field is required"}))
      }

      else{
        if(!error.status)
            setError(prev => ({...prev, status: false, message: ""}))
      }
    }

    const handleEmailValidation = (e)=>{        
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = regex.test(e.target.value);
        
        if (isValid) {
          setError(prev => ({...prev, status: false , message: ""}))
        } else {
            setError(prev => ({...prev, status: true , message: "Invalid email"}))
        }
    }

  return (
    <TextField
        error={error.status}
        variant={variant}
        label={label}
        helperText={error.status ? error.message : "" }
        value={email}
        onChange={(e)=>{changeValue(e);handleEmailValidation(e);}}
        onBlur={handleBlur}
        required={true}
        slotProps={
          {
            input: {
              endAdornment: 
                <EmailIcon sx={{color: `${ error.status ? '#ef5350' : '#42a5f5'}`}} />                  
            }
          }
        }
        />        
  )
}


export default FormEmail