import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'



const AdminDashboard = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  console.log("User::",user)
  useEffect(() => {
  
    if(!user.isUserLoggedIn){
        navigate("/")
    }
    
  }, [user])
  
  if(!user.isUserLoggedIn){
    console.log("navigating...")
    navigate("/")
  }
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard