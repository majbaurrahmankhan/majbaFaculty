import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <img src={images[index]} className="slider-image" alt="slider" />
      <div className="slider-caption">Engineering Faculty, University of Chittagong</div>
    </div>
  );
};

export default Slider;
