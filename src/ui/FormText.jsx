import { TextField } from '@mui/material'
import React from 'react'
import { camelCaseFormat } from '../utils/camelCase'
import EmailIcon from '@mui/icons-material/Email';

const FormText = ({variant,label,value,setFormData}) => {
    const [text, setText] = React.useState(value)   
    const [error, setError] = React.useState({status: false, message: ""})

    const changeValue = (event) => {
        setText(event.target.value);
        setFormData(prev=>({...prev, [camelCaseFormat(label)]: event.target.value}))
    }

    const handleBlur = ()=>{
      if(!text.trim()){
         setError(prev=> ( {...prev, status: true, message: "This field is required"}))
      }

      else{
        setError(prev => ({...prev, status: false, message: ""}))
      }
    }

  return (
    <TextField
        error={error.status}
        variant={variant}
        label={label}
        helperText={error.status ? error.message : "" }
        value={text}
        onChange={changeValue}
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


export default FormText