import React from 'react'
import '../Navbar/navbarcss.css'
import { Link } from "react-router-dom";
const Navbar = () => {
return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">SUN WORKSHOP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">ABOUT AS</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/tool">TOOLS</Link>
        </li>
        <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
      <div className="container1">
      <Link className="button" to="/login">LOGIN</Link>
</div>  
<div className="container1">
<Link className="button" to="/signup">SIGN UP</Link>
</div> 
    </div>
  </div>
</nav>
  )
}

export default Navbar
