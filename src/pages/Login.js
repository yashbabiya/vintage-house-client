import React, { useState } from 'react'
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

    
  const [values, setValues] = useState({
   
    email: "",
    password: "",


  });
  const handleChanges = (differentParam) => (event) => {
    setValues({ ...values, [differentParam]: event.target.value });
  };
  var {  email, password } = values
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
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
            <label className="form-check-label" for="inlineRadio1">BUYER</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label" for="inlineRadio2">SELLER</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
            <label className="form-check-label" for="inlineRadio3">Admin</label>
        </div>
        <button className="btn btn-success my-2 form-control text-white" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}
