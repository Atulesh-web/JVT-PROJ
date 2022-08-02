import React from 'react';
import { Link } from "react-router-dom";
function Navbar(){
  return(
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">

          <a class="nav-link" href="index2.html">Contact</a>

      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index3.html">Videos</a>
      </li>

    </ul>
  );
}



export default Navbar;
