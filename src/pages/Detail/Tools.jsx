import React from 'react'
import Detail from './Detail'
import track from '../Images/track.jpg'
import belt from '../Images/belt.jpg'
import ricefilter from '../Images/ricefilter.jpg'
import ricetransform from '../Images/ricetransform.jpg'
import tracktyre from '../Images/tracktyre.jpg'
import detimg1 from '../Images/detimg1.png'
import detimg2 from '../Images/detimg2.jpg'
import detimg3 from '../Images/detimg3.jpg'
import detimg4 from '../Images/detimg4.jpg'
import detimg5 from '../Images/detimg5.jpg'
import detimg6 from '../Images/detimg6.jpg'
import detimg7 from '../Images/detimg7.jpg'
import detimg8 from '../Images/detimg8.jpg'
import detimg9 from '../Images/detimg9.jpg'
import detimg10 from '../Images/detimg10.jpg'
import detimg11 from '../Images/detimg11.jpg'
import detimg12 from '../Images/detimg12.jpg'
export default function Tools() {
  return (
    <div>
      <Detail img1={track} img2={belt} img3={ricefilter}/>
      <Detail img1={ricetransform} img2={tracktyre} img3={detimg1}/>
      <Detail img1={detimg2} img2={detimg3} img3={detimg4}/>
      <Detail img1={detimg5} img2={detimg6} img3={detimg7}/>
      <Detail img1={detimg8} img2={detimg9} img3={detimg10}/>
      <Detail img1={detimg11} img2={detimg12} img3={detimg10}/>
    </div>
  )
}
