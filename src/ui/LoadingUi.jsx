import { Backdrop, CircularProgress } from '@mui/material';


const LoadingUi = () => {      
  return (
    <Backdrop
    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, visibility: 'visible', opacity: 1, transition: 'opacity 225ms cubic-bezier(0.4,0,0.2,1)' })}
    open={true}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default LoadingUi