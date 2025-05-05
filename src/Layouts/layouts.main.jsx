import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return ( 
        <Outlet/>   
  )
}

export default MainLayout