import React from "react";
import CardImage from "./cardImage";
import CardLevel from "./cardLevel";
import CardDes from "./cardDes";
import CardTitle from "./cardTitle";
import CardUnit from "./cardUnit";
import "../app.css";
export default function Card(props) {
  return (
    <div className="slide-container">
      <div className="wrapper">
        <div className={`clash-card ${props.cardInfo.name}`}>
          <CardImage data={props.cardInfo} />
          <CardTitle data={props.cardInfo} />
          <CardLevel data={props.cardInfo} />
          <CardDes data={props.cardInfo} />
          <CardUnit data={props.cardInfo} />
        </div>
      </div>
    </div>
  );
}
