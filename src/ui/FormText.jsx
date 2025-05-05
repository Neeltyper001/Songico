import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { camelCaseFormat } from '../utils/camelCase'

const FormText = ({variant,label, helperText, value, adornmentIcon,setFormData}) => {
    const [text, setText] = React.useState(value)   
    
    const changeValue = (event) => {
        setText(event.target.value);
        setFormData(prev=>({...prev, [camelCaseFormat(label)]: event.target.value}))
    }

  return (

<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField
            variant={variant}
            label={label}
            helperText={helperText}
            value={text}
            onChange={changeValue}
            required={true}
            />        
    
            {adornmentIcon}
  </Box>
  )
}


export default FormText