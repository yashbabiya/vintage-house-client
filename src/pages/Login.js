import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {

    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const login = () =>{
        dispatch({
            type:"LOGIN",
            payload:{
                username:"yash",
                email:"",
                role:"BUYER"
            }
        })
        console.log("user",user);
    }
  return (
    <div>
        Login
        <button onClick={login}>Login</button>
    </div>
  )
}
