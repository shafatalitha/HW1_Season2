import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
   return(<div>
    <ul>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </ul>
  </div>);
}
