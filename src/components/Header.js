import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const searchProducts = () => {
    dispatch({ type: "UPDATE", payload: { keyword } })
  }
  useEffect(() => {
    console.log("search", search);
  }, [search])
  return (
    <div className="header bg-success">
      <ul className="nav nav-tabs ">
        <li className="nav-item">
          <Link className="nav-link text-white p-2 m-2" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <input
          className="nav-link text-dark bg-white  p-2 m-2"
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
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white p-2 m-2" to="/login">Login</Link>
        </li>
        <li className="nav-item">

          <Link className="nav-link text-white p-2 m-2" to="/signup">Signup</Link>
        </li>
      </ul>
      <nav>



      </nav>
    </div>
  );
}
