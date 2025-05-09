import React from 'react'
import { useNavigate } from 'react-router-dom'
import UseApiStatus from '../hooks/useApiStatus';
import { Container, Typography } from '@mui/material';
import {account} from '../lib/appwrite.js'
import { getSession } from '../lib/appwrite.session.js';

const SignInRedirectionPage = () => {
    const navigate = useNavigate();    

    React.useEffect(()=>{
        const redirectToDashboard = async ()=>{
            try {
                const response = await getSession();
                navigate('/dashboard' , { state: response, replace: true})
            } catch (error) {
                console.log(error.message)
                navigate('/signin')
            }
        }

        redirectToDashboard();
    },[navigate])
  return (
    <Container>        
        <Typography variant='h1' >Redirecting...</Typography>
    </Container>
  )
}

export default SignInRedirectionPage