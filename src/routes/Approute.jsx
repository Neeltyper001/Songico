import MainLayout from "../Layouts/layouts.main";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Signup from "../Pages/pages.singup";
import Landing from "../Pages/pages.landing";
import Signin from "../Pages/pages.signin";
import SignInRedirectionPage from "../middlewares/middleware.signin";
import DashboardLayout from "../Layouts/layouts.dashboardlayout";
import Dashboard from "../Pages/pages.dashboard";
import RecoveryPassword from "../Pages/page.recovery-password";
import NewPassword from "../Pages/page.new-password";
import SomethingWentWrong from "../Pages/pages.something-went-wrong";


const AppRoute = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Landing />} />  
      <Route  path="signup" element={<Signup />} /> 
      <Route  path="signin" element={<Signin />} />     
      <Route path="redirect" >
        <Route index element={<SignInRedirectionPage />} />
        <Route path="new-password" element={<NewPassword />} />
      </Route>
      <Route path="recovery" element={<RecoveryPassword />} />
      <Route path="error">
         <Route index element={<SomethingWentWrong />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
         <Route index element={<Dashboard />} />
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoute