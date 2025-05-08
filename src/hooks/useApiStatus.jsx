import React from 'react'

const UseApiStatus = () => {
    const [apiStatus , setApiStatus] = React.useState({isError: false , isLoading: false , isSuccess: false});
        
  return (
    {apiStatus , setApiStatus}
  )
}

export default UseApiStatus