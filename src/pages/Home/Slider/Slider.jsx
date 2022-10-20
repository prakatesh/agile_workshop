import sl1 from './sl1.jpg'
import sl2 from './sl2.jpg'
import sl3 from './sl3.jpg'
const Slider = () => {

  return (
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner col-md-12">
      <div className="carousel-item active">
        <img src={sl1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={sl2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={sl3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type={"button"} data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type={"button"} data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider
