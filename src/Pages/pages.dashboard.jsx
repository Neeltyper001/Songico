import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import UseApiStatus from '../hooks/useApiStatus'
import { deleteSession } from '../lib/appwrite.session'
import LoadingUi from '../ui/LoadingUi'
import Navbar from '../Components/Navbar'
import SongSection from '../Sections/SongSection-copy'

const Dashboard = () => {
    const navigate = useNavigate();
    const {apiStatus , setApiStatus} = UseApiStatus();

    const handleLogout = async ()=>{
        try {
             setApiStatus(prev => ({...prev, isLoading: true , isError: false , isSuccess: false }))
             const response = await deleteSession();
             setApiStatus(prev=>({...prev,isLoading: false , isError: false , isSuccess: true}))
             console.log(response)
             navigate('/' , {replace: true})
        } catch (error) {
             setApiStatus(prev => ({...prev, isLoading: false , isError: true , isSuccess: false}))
        }
    }
  return (
    <>
        <Navbar />
        <SongSection />
        <Button onClick={handleLogout} variant="contained">LogOut</Button>   
        {apiStatus.isLoading && <LoadingUi />} 
    </>
  )
}

export default Dashboard