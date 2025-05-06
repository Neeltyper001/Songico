import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'

import React from 'react'
import { camelCaseFormat } from '../utils/camelCase';

const FormPassword = ({variant,label, value,setFormData}) => {
    const [password, setPassword] = React.useState(value)
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState({status: false, message: ""})
    
    
        const handleBlur = ()=>{
          if(!password.trim()){
             setError(prev=> ( {...prev, status: true, message: "This field is required"}))
          }
    
          else{
            setError(prev => ({...prev, status: false, message: ""}))
          }
        }
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
            required={true}
            error={error.status}
            variant={variant}>
          <InputLabel             
            htmlFor="standard-adornment-password">{label}</InputLabel>
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
                  {showPassword ? <VisibilityOff sx={{color: `${error.status ? '#ef5350': '#42a5f5'}`}}/> : <Visibility sx={{color: `${error.status ? '#ef5350': '#42a5f5'}`}}/>}
                </IconButton>
              </InputAdornment>
            }
             value={password}
             onChange={handleChangePassword}
             onBlur={handleBlur}                      
          />
          <FormHelperText id="standard-weight-helper-text">{error.status ? error.message: ""}</FormHelperText>
        </FormControl>     
  )
}


export default FormPassword