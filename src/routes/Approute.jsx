import MainLayout from "../Layouts/layouts.main";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import React from 'react'
import DefaultSection from "../Sections/DefaultSection";
import SongSection from "../Sections/SongSection";
import Signup from "../Pages/pages.singup";
import Landing from "../Pages/pages.landing";
import Signin from "../Pages/pages.signin";

const AppRoute = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Landing />} />  
      <Route  path="/signup" element={<Signup />} /> 
      <Route  path="/signin" element={<Signin />} /> 
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoute