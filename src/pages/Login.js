import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../backend'

export default function Login() {
  
    const user = useSelector(state=>state.user)
    
 
    const dispatch = useDispatch()
    const login = () =>{
        dispatch({
            type:"LOGIN",
            payload:{
                username,
                password,
                role
            }
        })
    }

    
  const [values, setValues] = useState({
   
    username: "",
    password: "",
    role:"BUYER",
    success:false,
    warning:false


  });
 
  const showWarningMessage = () => (
    <div
      className="alert alert-danger mt-3"
      style={{ display: warning && !success ? "" : "none" }}
    >
      <h5>{warning}</h5>
    </div>
  )

  const showSuccessMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: success && !warning ? "" : "none" }}
    >
      <h5>{success}</h5>
    </div>
  )

  const handleChanges = (differentParam) => (event) => {
    setValues({ ...values, [differentParam]: event.target.value ,success:false,warning:false});

  };

  var {  username, password,role ,success,warning} = values
  
  const handleSubmit = e => {
    e.preventDefault()
    if(!role || !username || !password){
      setValues({...values,warning:"Please enter all required field",success:false})
      return;
    }
   
    axios.post(`${API}/user/signin`,{role,username,password})
    .then(function(response){
      setValues({...values,success:"",warning:false})
      console.log(response)
      if(response.data){
        login()
      }
    })
    .catch(function(error){
      setValues({...values,success:false,warning:error.response.data})
      console.log(error)
    })
  }

  const performRedirect = () => {
    if(user?.isUserLoggedIn){
      switch(user?.role){
        case 'BUYER':
          //BUYER DASHBOARD
        case 'SELLER':
          //SELLER DASHBOARD
        case 'ADMIN':
          //ADMIN DASHBOARD
      }
    }
  }




  return (
    <div className="row">
    <div className="col-lg-4 col-md-12 col-sm-12 offset-lg-4">
      {showSuccessMessage()}
      {showWarningMessage()}
      {performRedirect()}

      <form>
        <input
          value={username}
          onChange={handleChanges("username")}
          type="text"
          className="form-control my-2"
          placeholder="username"
          required
          autoFocus
        />
        <input
          value={password}
          onChange={handleChanges("password")}
          type="password"
          className='form-control my-2'
          placeholder='Password'
          required
          autoFocus
        />
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="role" id="inlineRadio1" value="BUYER"  checked={role === 'BUYER'} onChange={handleChanges("role")}/>
            <label className="form-check-label">BUYER</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="role" id="inlineRadio2" value="SELLER" checked={role === 'SELLER'} onChange={handleChanges("role")}/>
            <label className="form-check-label" >SELLER</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="role" id="inlineRadio3" value="ADMIN" checked={role === 'ADMIN'} onChange={handleChanges("role")}/>
            <label className="form-check-label" >ADMIN</label>
        </div>
        <button className="btn btn-success my-2 form-control text-white" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}
