import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="Card2"
      onClick={() => {
        navigate("/services");
      }}
    >
      <img src={props.imgPath} alt="Residential Projects" />
      <h3>{props.heading}</h3>
    </div>
  );
};

export default Card;
