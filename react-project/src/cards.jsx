import React from "react";
import "./app.css";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}
