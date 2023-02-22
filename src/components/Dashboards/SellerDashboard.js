import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SellerDashboard = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  console.log("User::",user)
  useEffect(() => {
  
    if(!user.isUserLoggedIn){
        navigate("/")
    }
    
  }, [user])
 

  return (
    
    <div>
        <h1>SellerDashboard</h1>
    </div>
  )
}

export default SellerDashboard