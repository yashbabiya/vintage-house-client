import React, { useState } from 'react'


export default function Signup() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""

  });
  const handleChanges = (differentParam) => (event) => {
    setValues({ ...values, [differentParam]: event.target.value });
  };
  var { name, email, password, phone } = values
  const handleSubmit = () => { }
  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12 offset-lg-4">
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
