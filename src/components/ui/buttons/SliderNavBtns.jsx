import React from 'react';
import './Buttons.css';

const SliderNavBtns = () => {
  const slide = [1, 2, 3, 4];

  return (
    <div className="slider-nav-btns">
      { slide.map((slide, i) => {
        return <i className="far fa-circle" key={i} />
      })}
    </div>
  )
};

export default SliderNavBtns;