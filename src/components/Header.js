import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const user = useSelector(state=>state.user)
  const navigate = useNavigate()
  console.log("user::",user)
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    console.log("user::",user)
  }, [user])
  
  const searchProducts = () => {
    dispatch({ type: "UPDATE", payload: { keyword } })
  }
  const logout = () => {
    console.log("Logging out...")
    dispatch({type:"LOGOUT"})
    navigate("/")
    console.log("user after logout::",user)
  }
  
  useEffect(() => {
    //console.log("search", search);
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
        {!(user?.isUserLoggedIn) &&
          <li className="nav-item">
          <Link className="nav-link text-white p-2 m-2" to="/login">Login</Link>
        </li>
        }
        {!(user?.isUserLoggedIn) &&
          <li className="nav-item">
          <Link className="nav-link text-white p-2 m-2" to="/signup">Signup</Link>
        </li>
        }
        {(user?.isUserLoggedIn === true) &&
          <li className="nav-item">
          <button className="nav-link bg-danger text-white p-2 m-2" onClick={() => {logout()}}>Logout</button>
        </li>
        }
       
      </ul>
    </div>
  );
}
