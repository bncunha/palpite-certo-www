import React from "react";
import './carousel.style.scss';

const Carousel = ({ render, data }) => {
  return (
    <div className="carousel">
      {
        data.map((item) => render(item))
      }
    </div>
  )
}

export default Carousel;