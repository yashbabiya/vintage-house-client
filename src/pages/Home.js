import React from "react";
import CreateProduct from "../components/forms/CreateProductForm";

export default function Home() {
  return (
    <div>
      <div className="addProduct">
        <CreateProduct />
      </div>
    </div>
  );
}
