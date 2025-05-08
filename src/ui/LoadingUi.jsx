import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react'

const LoadingUi = () => {

      console.log("Loading UI")
  return (
    <Backdrop
    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, visibility: 'visible', opacity: 1, transition: 'opacity 225ms cubic-bezier(0.4,0,0.2,1)' })}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default LoadingUi