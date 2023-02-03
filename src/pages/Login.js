import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const login = () =>{
        dispatch({
            type:"LOGIN",
            payload:{
                email,
                password,
                role
            }
        })
        console.log("user",user);
    }

    
  const [values, setValues] = useState({
   
    email: "",
    password: "",
    role:"BUYER"


  });
 
  
  const handleChanges = (differentParam) => (event) => {
    setValues({ ...values, [differentParam]: event.target.value });
  };
  var {  email, password,role } = values
  console.log(role)
  const handleSubmit = () => { }
  return (
    <div className="row">
    <div className="col-lg-4 col-md-12 col-sm-12 offset-lg-4">
      <form>
        <input
          value={email}
          onChange={handleChanges("email")}
          type="email"
          className="form-control my-2"
          placeholder="email"
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
            <label className="form-check-label" for="inlineRadio1">BUYER</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="role" id="inlineRadio2" value="SELLER" checked={role === 'SELLER'} onChange={handleChanges("role")}/>
            <label className="form-check-label" for="inlineRadio2">SELLER</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="role" id="inlineRadio3" value="ADMIN" checked={role === 'ADMIN'} onChange={handleChanges("role")}/>
            <label className="form-check-label" for="inlineRadio3">ADMIN</label>
        </div>
        <button className="btn btn-success my-2 form-control text-white" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}
