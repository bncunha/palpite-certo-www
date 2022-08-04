import React from "react";
import './carousel.style.scss';

const Carousel = ({ render, data }) => {
  return (
    <div className="carousel">
      {
        data.map((item, index) => 
        <React.Fragment key={index}>
          { render (item) }
        </React.Fragment>)
      }
    </div>
  )
}

export default Carousel;