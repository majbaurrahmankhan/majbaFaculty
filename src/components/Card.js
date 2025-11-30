import React from "react";
import "./Card.css";

const Card = ({ image, title, text }) => {
  return (
    <div className="card-box">
      {image && <img src={`/images/${image}`} alt={title} />}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
