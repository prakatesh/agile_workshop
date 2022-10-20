import '../Login/sigincss.css'
import emaillogo from './emaillogo.png'
import passlogo from './passlogo.jpg'
import logim from './loginimg.png'
import React from 'react'

export default function Signin() {
  return (
    <div>
      <div className='baclog'>
          <div className='row spacebw'>
              <div className='col-lg-4'></div>
              <div className='col-lg-6'>
                <section className='signcenter'>
                  <div className='row spacebw'>
                    <div className='col-md-6 WELCOME'>WELCOME BACK,</div>
                  </div>
                    <div className='border col-md-6 spacebw'>
                    <div className='row spacebw'>
                    <div className='col-md-12'>
                    <img className='loginimg' src={logim} alt='hi'></img>
                    </div>
                    </div>
                    <div className='row spacebw'>
                    <div className='col-md-12  empas'>
                      <img src={emaillogo} alt="emaillogo" />
                    <input type="text" placeholder='Email Address' />
                    </div>
                    </div>
                    <div className='row spacebw'>
                    <div className='col-md-12  empas'>
                    <img src={passlogo} alt="emaillogo" />
                    <input type="password" placeholder="Password"></input>
                    </div>
                    </div>
                    <div className='row spacebw check'>
                    <div className='col-md-12'>
                      <input type="checkbox" /><label>Keep Me Logged in</label>
                    </div>
                    </div>
                    <div className='row spacebw butlo'>
                    <div className='col-md-12'>
                    <a href="#"> <button type='button'>LOGIN IN</button></a>
                    </div>
                    </div> 
                    <div className='row spacebw alog'>
                    <div className='col-md-12'>
                      <a className='pass' href="#">FORGET PASSWORD</a>
                    </div> 
                    <div className='col-md-12 spacebw'>
                      <a  href="#">NEW USER?              </a>
                      <a className='log' href="#">REGISTER</a>
                    </div> 
                    </div> 
                    <div className='row spacebw usinglogin'>
                    <div className='col-md-12'>
                      <p>Or Login Using:
                        <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-instagram"></i></a>
                      <a href=""><i className="fa fa-google"></i></a>
                      </p>
                    </div>
                    </div>
                  </div>
                </section>
            </div>
            <div className='col-lg-2 '></div>
          </div>
      </div>
    </div>
  )
}

