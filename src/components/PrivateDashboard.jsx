import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateDashboard = () => {
   
   const userToken = useSelector(state=>state.userToken)
    
  return (
  userToken?<Outlet/>:<Navigate to="/login"/>
  )
}

export default PrivateDashboard
