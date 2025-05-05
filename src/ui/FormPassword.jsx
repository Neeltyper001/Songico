import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'

import React from 'react'
import { camelCaseFormat } from '../utils/camelCase';

const FormPassword = ({variant,label, helperText, value,setFormData}) => {
    const [password, setPassword] = React.useState(value)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
        setFormData(prev=>({...prev, [camelCaseFormat(label)]: event.target.value}))
    }

  return (
<FormControl 
            variant={variant}>
          <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
          <Input
            id={`standard-adornment-password-${label}`}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff sx={{color: 'blue'}}/> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
             value={password}
             onChange={handleChangePassword}
             required={true}             
          />
          <FormHelperText id="standard-weight-helper-text">{helperText}</FormHelperText>
        </FormControl>     
  )
}


export default FormPassword