import axios from "axios";
import React, { useState } from "react";
import { API } from "../../backend";

export default function CreateProduct() {

  const [values, setValues] = useState({
    name:"",
    description:"",
    price:"",
    type:"",
    category:"",
    warning: false,
    success: false
  })

  
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

  const {name,description,price,type,category,success,warning} = values
  const handleChanges = (differentParam) => (event) => {

    setValues({ ...values, [differentParam]: event.target.value, success:false,warning:false });
  };
  const categories = ["comics","history","sports","autographs","toys","coins","paintings","other","paintings","photography","sculptures"]
  const types = ["artwork","collectables"]
  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post(`${API}/product/create`,{}).then(function(response){
      
    }).catch(function(error){

      if(error.message){
        setValues({...values,success:false,warning:error.message})
      }
      setValues({...values,success:false,warning:error.response?.data})
      console.log(error.message );
    })
    
  }
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 offset-lg-4">
      {showSuccessMessage()}
      {showWarningMessage()}
      <form>
        <label>Upload Image</label>
        <input 
          className="form-control my-2 " 
          accept="" 
          type="file" 
        />
        <input 
          className="form-control my-2" 
          placeholder="Product Name" 
          value={name}
          onChange={handleChanges("name")}
          type="text" 
        />
        <input 
          className="form-control my-2" 
          placeholder="Product Description"
          value={description}
          onChange={handleChanges("description")} 
          type="text" 
        />
        <select
          onChange={handleChanges("type")}
          value={type}
          className="form-control my-2"
          placeholder="Type"
        >
          <option>Select Type</option>
          {types &&
            types.map((t,index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
        </select>
 
        <input 
          className="form-control my-2" 
          placeholder="Price" 
          type="text" 
          value={price}
          onChange={handleChanges("price")}
        />
        <select
          onChange={handleChanges("category")}
          value={category}
          className="form-control my-2"
          placeholder="Category"
        >
          <option>Select Category</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate}>
                {cate}
              </option>
            ))}
        </select>
 
        <input 
          className="btn btn-warning my-2 form-control text-white" 
          type="submit" 
          onClick={handleSubmit}
         />

      </form>
    </div>
  );
}
