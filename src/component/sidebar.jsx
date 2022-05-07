import React from "react";
import "../app.css";

export default function sidebar(props) {
  return (
    <div onClick={(e) => props.commentClick(props.id)} className="wrapper">
      {props.data}
    </div>
  );
}
