import React from "react";

export default function CreateProduct() {
  return (
    <>
      <form action="">
        <label>
          Product Name
          <input type="text" id="pName" />
        </label>

        <br />
        <label>
          Product Description
          <input type="text" id="pDescription" />
        </label>

        <br />
        <label>
          Type
          <input type="text" id="pType" />
        </label>

        <br />
        <label>
          Price
          <input type="text" id="pPrice" />
        </label>

        <br />
        <label>
          Category
          <input type="text" id="pCategory" />
        </label>

        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
