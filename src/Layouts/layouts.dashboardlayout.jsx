import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { UserProfileDataContext } from '../contexts/context.userProfileData'

const DashboardLayout = () => {  
  const userProfileData = useLoaderData();
  
  return (
    <>
        <UserProfileDataContext.Provider value={ userProfileData} >
          <Navbar />
          <Outlet />    
        </UserProfileDataContext.Provider>
    </>
  )
}

export default DashboardLayout