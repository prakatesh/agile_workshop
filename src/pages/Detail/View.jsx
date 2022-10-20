import React from 'react'
import '../Detail/viewcss.css'
import shoe_4 from '../Images/track4.jpg'
import shoe_3 from '../Images/track3.png'
import shoe_2 from '../Images/track2.jpg'
import shoe_1 from '../Images/track1.png'
export default function View() {
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 0;
imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});
function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}
window.addEventListener('resize', slideImage);
  return (
    <div>
      <div className = "card-wrapper">
      <div className = "card">
        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img src = {shoe_1} alt = "shoe image"/>
              <img src = {shoe_2} alt = "shoe image"/>
              <img src = {shoe_3} alt = "shoe image"/>
              <img src = {shoe_4} alt = "shoe image"/>
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <img src = {shoe_1} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <img src = {shoe_2} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <img src = {shoe_3} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "4">
                <img src = {shoe_4} alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>
        <div className = "product-content">
          <h2 className = "product-title">Track</h2>
          <a href = "#" className = "product-link">visit AgriCart</a>
          <div className = "product-rating">
            <i className = "fa fa-star"></i>
            <i className = "fa fa-star"></i>
            <i className = "fa fa-star"></i>
            <i className = "fa fa-star"></i>
            <i className = "fa fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div className = "product-price">
            <p className = "last-price">Old Price: <span>100000</span></p>
            <p className = "new-price">New Price: <span>Rs:80000</span></p>
          </div>

          <div className = "product-detail">
            <h2>about this item: </h2>
            <p>These are fitted with tracks instead of wheels. They are very efficient in areas where wheels are likely to get bogged down.

</p>
            <p></p>
            <ul>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Wheel</span></li>
              <li>Shipping Area: <span>All over india</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>
          <div className = "purchase-info">
            <input type = "number" min = "0" value = "1"/>
            <button type = "button" className = "btn">
              Add to Cart <i className = "fa fa-shopping-cart"></i>
            </button>
            <button type = "button" className = "btn">Compare</button>
          </div>
          <div>
            <p><b>Description</b></p>
            <p><b>Function:</b></p>
            <p>Insect Pest Controlled- Aphids, Jassids, Thrips, Bollworms, Mite, Borers, Leaf Hoppers, White fly, Diamond Backmoth, Sucking and chewing Pests, Loopers & Semi-loopers etc.</p>
            <p>Crops Protected- Tea, Cereals, Vegetables, Cotton, Sugarcane, Coffee, Fruits, Sericulture sector etc</p> 
            <p><b>Use :</b></p>
            <p>A Track Combine Harvester or Track Type harvester is a large machine which is used on farms to cut, sort, and clean grain</p>
          </div>

          <div className = "social-links">
      
              <p className = "tab1"> Share At: </p>
            <a href = "#">
              <i className = "fa fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i className = "fa fa-twitter"></i>
            </a>
            <a href = "#">
              <i className = "fa fa-instagram"></i>
            </a>
            <a href = "#">
              <i className = "fa fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i className = "fa fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
