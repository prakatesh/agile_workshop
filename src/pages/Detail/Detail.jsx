import React from 'react'
import '../Detail/detailcss.css'
import { Link } from "react-router-dom";
function Detail(props) {
  return (
    <div>
      <div className='row carddetail' >
          <div className='col-md-4 carddetail1'>
          <Link to="/view"><img src={props.img1} alt='cannot'/></Link>
          </div>
          <div className='col-md-4 carddetail1'>
            <img src={props.img2} alt='canno'/>
          </div>
          <div className='col-md-4 carddetail1'>
            <img src={props.img3} alt='cannt'/>
          </div>
      </div>
    </div>
  )
}
export default Detail
