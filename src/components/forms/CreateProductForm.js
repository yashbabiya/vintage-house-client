import React from "react";

export default function CreateProduct() {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 offset-lg-4">
      <form action="" >
        <label>Upload Image</label>
        <input className="form-control my-2 " accept="" type="file" />
        <input className="form-control my-2" placeholder="Product Name" type="text" id="pName" />
        <input className="form-control my-2" placeholder="Product Description" type="text" id="pDescription" />
        <input className="form-control my-2" placeholder="Type" type="text" id="pType" />
        <input className="form-control my-2" placeholder="Price" type="text" id="pPrice" />
        <input className="form-control my-2" placeholder="Category" type="text" id="pCategory" />

        <input className="btn btn-warning my-2 form-control text-white" type="submit" value="submit" />

      </form>
    </div>
  );
}
