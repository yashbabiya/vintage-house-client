import axios from 'axios';
import React, { useState } from 'react'

import { API } from '../backend';



export default function Signup() {


  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "BUYER",
    warning: false,
    success: false

  });
  const handleChanges = (differentParam) => (event) => {

    setValues({ ...values, [differentParam]: event.target.value, success:false,warning:false });
  };
  var { name, email, password, phone, role, warning, success } = values
  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password || !phone || !role) {
      setValues({ ...values, warning: "Please enter all the required field..", success: false });
      return;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      setValues({ ...values, warning: "Please enter valid email..", success: false });
      return;
    }
    
    if (!phone.match(/^\d{10}$/)) {
      setValues({ ...values, warning: "Please enter valid phone number..", success: false });
      return;
    }
    if (password.length < 5) {
      setValues({ ...values, warning: "Password length is min 5 letters..", success: false });
      return;
    }

    const user = {
      username:name,
      email,role,password,phone
    }

    //POST method call
    axios.post(`${API}/user/signup`,user)
    .then(function (response) {
      setValues({...values,warning:false,success:`${name} signedup successfully`})
      console.log(response);
    })
    .catch(function (error) {
      
      setValues({...values,success:false,warning:error.response.data})
      console.log(error);
    });

    
    if(success){
      //redirect to login page
  

    }

    

  }

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

  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12 offset-lg-4">
        {showSuccessMessage()}
        {showWarningMessage()}
        <form>
          <input
            value={name}
            onChange={handleChanges("name")}
            type="text"
            className="form-control my-2"
            placeholder="User name"
            required
            autoFocus
          />
          <input
            value={email}
            onChange={handleChanges("email")}
            type="email"
            className="form-control my-2"
            placeholder="email"
            required
            autoFocus
          />
          {/* phone role password */}
          <input
            value={phone}
            onChange={handleChanges("phone")}
            type="text"
            className='form-control my-2'
            placeholder='Phone'
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
            <input className="form-check-input" type="radio" name="role" id="inlineRadio1" value="BUYER" checked={role === 'BUYER'} onChange={handleChanges("role")} />
            <label className="form-check-label" for="inlineRadio1">BUYER</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="role" id="inlineRadio2" value="SELLER" checked={role === 'SELLER'} onChange={handleChanges("role")} />
            <label className="form-check-label" for="inlineRadio2">SELLER</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="role" id="inlineRadio3" value="ADMIN" disabled />
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
