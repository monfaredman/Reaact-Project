import React from "react";
import "../app.css";
export default function CardDes(props) {
  return (
    <div className="clash-card__unit-description">{props.data.description}</div>
  );
}
