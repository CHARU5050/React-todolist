import React, { useEffect } from "react";
import './carousel.css'





const Carousel = () => {
  useEffect(() => {
    /* global $ */
    $(document).ready(function() {
      $('.carousel').carousel({
        indicators: true
      });
    });
  }, []);
    
  return (<>
  <div className="carouselh1">To-do list</div>
    <div className="carousel">
      
        
      <a href="#one" className="carousel-item">
        <img src="images/1de0cf7f46f41671229afba5c3279aa4.jpg" alt="Image 1"/>
      </a>
      <a href="#two" className="carousel-item">
        <img src="images/forget.jpg" alt="Image 2" />
      </a>
      <a href="#three" className="carousel-item">
        <img src="images/smile.jpg" alt="Image 3" />
      </a>
      <a href="#four" className="carousel-item">
        <img src="images/dark.jpg" alt="Image 4"  />
      </a>
      <a href="#five" className="carousel-item">
        <img src="images/giveup.jpg" alt="Image 5"  />
      </a>
    </div>
 
  </>
  );
};

export default Carousel;
