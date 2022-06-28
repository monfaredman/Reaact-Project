import React from "react";
import "../app.css";
export default function CardTitle(props) {
  return <div className="clash-card__unit-name">{props.data.title}</div>;
}
