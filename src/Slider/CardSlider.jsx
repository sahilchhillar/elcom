import React, { useState } from 'react';
import './CardSlider.css';

function CardSlider(){
  const slides = ["Card 1", "Card 2", "Card 3", "Card 4"];
  const [position, setPosition] = useState(0);
  const [slide, setSlide] = useState(slides[position]);

  const scrollLeft = () => {
    let newPosition = position - 1;
    if(newPosition < 0){
      newPosition = 0;
    }

    console.log(newPosition);

    setPosition(newPosition);
    setSlide(slides[newPosition]);
  };

  const scrollRight = () => {
    let newPosition = position + 1;
    if(newPosition >= slides.length-1){
      newPosition = slides.length-1;
    }

    console.log(newPosition);

    setPosition(newPosition);
    setSlide(slides[newPosition]);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="card">{slide}</div>
      </div>
      <button className="prev-button" onClick={scrollLeft}>
        Previous
      </button>
      <button className="next-button" onClick={scrollRight}>
        Next
      </button>
    </div>
  );

}

export default CardSlider;