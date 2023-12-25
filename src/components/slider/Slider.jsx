import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";
// import Arrow from "./Arrow.jsx";

const Slider = () => {
 return (
 <div className="slider-container">
    <div className="slider-wrapper">
    <div className="slide-first-slide">
    <div className="slide-img-wrapper">
        <img src={FirstBook} alt="" />
    </div>
    <div className="slide-info-wrapper">
        <h1 className="slide-info-title">Book Store</h1>
        <p className="slide-info-desc">it's not just reading. it's living the adventure.</p>
        </div>
      </div>
      <div className="slide-second-slide">
    <div className="slide-img-wrapper">
        <img src={SecondBook} alt="" />
    </div>
    <div className="slide-info-wrapper">
        <h1 className="slide-info-title">Books</h1>
        <p className="slide-info-desc">it's not just reading. it's living the adventure.</p>
        </div>
      </div>


      <div className="slide-third-slide">
    <div className="slide-img-wrapper">
        <img src={ThirdBook} alt="" />
    </div>
    <div className="slide-info-wrapper">
        <h1 className="slide-info-title">Books for everyone</h1>
        <p className="slide-info-desc">it's not just reading. it's living the adventure.</p>
        </div>
      </div>


    </div>
 </div>
 )
};

export default Slider;
