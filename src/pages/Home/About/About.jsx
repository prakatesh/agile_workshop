import React from 'react'
import '../About/aboutcss.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const About =()=>{
return(
        <>
        <section id="about">
    <div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="card">
    <div className='row'>
        <div className='col-lg-4'>
        <LocationOnIcon/>
      </div>
      <div className='col-lg-6'>
      <div className='title'><h1>Loaction</h1></div>
      </div>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.`</p>
        <div className=' location'><a href='https://goo.gl/maps/rmdVniJZzLix6y1bA' target='_blank'>Click me</a></div>
        
      </div>
    </div>
    </div>
    <div className="col">
    <div className="card" >
    <div className='row'>
        <div className='col-md-4'>
      <img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" className ="card-img-top" alt="..."/>
      </div>
      <div className='col-md-6'>
      <div className='title'><h1>Title</h1></div>
      </div>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div><div className="col">
    <div className="card" >
    <div className='row'>
        <div className='col-md-4'>
      <img src="https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg" className ="card-img-top" alt="..."/>
      </div>
      <div className='col-md-6'>
      <div className='title'><h1>Title</h1></div>
      </div>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
  </div>
</div>
<div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="card" >
    <div className='row'>
        <div className='col-md-4'>
      <img src="https://www.hubspot.com/hubfs/product_icons_2022/CMSHub_Icon_Gradient_RGB_24px.svg" className ="card-img-top" alt="..."/>
      </div>
      <div className='col-md-6'>
      <div className='title'><h1>Title</h1></div>
      </div>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
    <div className="col">
    <div className="card" >
    <div className='row'>
        <div className='col-md-4'>
      <img src="https://www.hubspot.com/hubfs/product_icons_2022/OperationsHub_Icon_Gradient_RGB_24px.svg" className ="card-img-top" alt="..."/>
      </div>
      <div className='col-md-6'>
      <div className='title'><h1>Title</h1></div>
      </div>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div><div className="col">
    <div className="card" >
    <div className='row'>
        <div className='col-md-4'>
      <img src="https://www.hubspot.com/hubfs/product_icons_2022/ServiceHub_Icon_Gradient_RGB_24px.svg" className ="card-img-top" alt="..."/>
      </div>
      <div className='col-md-6'>
      <div className='title'><h1>Title</h1></div>
      </div>
      </div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
  </div>
</div>
</section>

    </>
    );
}
export default About