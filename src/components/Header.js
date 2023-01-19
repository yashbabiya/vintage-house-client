import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const searchProducts = () => {
    dispatch({type:"UPDATE",payload:{keyword}})
  }
  useEffect(()=>{
    console.log("search",search);
  },[search])
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              searchProducts()
            }
          }}
        />
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
}
