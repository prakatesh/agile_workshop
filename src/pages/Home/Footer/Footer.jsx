import React from 'react'
import '../Footer/footercss.css'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <div className='backgreen'>
    <div className='row centerfooter'>
        <div className='col-md-12 footericon'>
        <a href=""><i className="fa fa-facebook"></i></a>
        <a href=""><i className="fa fa-instagram"></i></a>
        <a href=""><i className="fa fa-twitter"></i></a>
        <a href=""><i className="fa fa-whatsapp"></i></a>
        <a href=""><i className="fa fa-google"></i></a>
        </div>
        <div className='col-md-12'>
          <p>In our website we have all item.</p>
        </div>
        <div className='col-md-12'>
        <p>We have top quality products and servies.</p>
        </div>
    </div>
    <div className='divthree'>
      <div className='row'>
        <div className='col-md-4'>
          <h1>PRODUCTS</h1>
          <a href=""><h6>Bearing</h6></a>
          <a href=""><h6>Belt</h6></a>
          <a href=""><h6>Grease</h6></a>
        </div>
        <div className='col-md-4'>
          <h1>MENU</h1>
        <a href=""><h6>Sign in</h6></a>
        <Link to="/signin">Sign Up</Link>
        <a href="#about"><h6>About</h6></a>
        </div>
        <div className='col-md-4'>
          <h1>CONTACT</h1>
          <a href=""><h6>+918610126966</h6></a>
          <a href=""><h6>sunpattri@gmail.com</h6></a>
          <a href=""><h6>6/744 Attur,Salem</h6></a>
          <a href=""><h6>Working Time:24/7</h6></a>
        </div>
      </div>
    </div>
    </div>
    <div className='extrafooter'>
      <a href="#">sunpattari.com</a>
    </div>
    </>
  )
}
