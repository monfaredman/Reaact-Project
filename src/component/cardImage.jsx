import React from "react";
import "../app.css";
export default function CardImage(props) {
  return (
    <div className="clash-card__image clash-card__image--barbarian">
      <img src={props.data.src} alt="barbarian" />
    </div>
  );
}
