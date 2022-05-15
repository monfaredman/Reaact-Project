import React from "react";
import "../app.css";
export default function CardLevel(props) {
  return (
    <div className="clash-card__level clash-card__level--barbarian">
      {props.data.level}
    </div>
  );
}
