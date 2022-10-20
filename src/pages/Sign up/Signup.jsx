import React from 'react'
import '../Sign up/Signupcss.css';
import BadgeIcon from '@mui/icons-material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
export default function Signup() {
  return (
    <div>
      <div className='signupback  centersignup'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4 cardsign '>
            <div className='row spacebws'>
                <div className='col-md-12 wesi'>WELCOME TO SUN WORKSHOP</div>
            </div>
            <div className='row spacebws'>
            <div className='col-md-12'><BadgeIcon/><input className='iconsi' type="text" placeholder='Name' /></div>
            </div>
            <div className='row spacebws'>
            <div className='col-md-12'><MailIcon/><input className='iconsi' type="text" placeholder='Email' /></div>
            </div>
            <div className='row spacebws '>
            <div className='col-md-12'><LockOpenIcon/><input className='iconsi' type="password" placeholder='password' /></div>
            </div>
            <div className='row spacebws summasi'>
                <div className='col-md-12 '><input className='iconsi'type={"checkbox"}></input>I read and agree to <a href='#'>Terms & Condition</a></div>
            </div>
            <div className='busis'>
            <button className='spacebws busi' type='button'>Create Account</button></div>
            <div className='row'>
                <div className='col-md-12 spacebwsb summasi'>
                    Already have an account?<a href=''>Sign in</a>
                </div>
            </div>
        </div>
        <div className='col-md-4'></div>
      </div>
      </div>
    </div>
  )
}
