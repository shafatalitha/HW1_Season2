import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar=()=>{
   return(<div>
    <ul>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </ul>
  </div>);
}

export default Navbar