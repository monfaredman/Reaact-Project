import React from "react";
import "../app.css";
export default function CardUnit(props) {
  return (
    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
      <div className="one-third">
        <div className="stat">
          {props.data.Training}
          <sup>S</sup>
        </div>
        <div className="stat-value">Training</div>
      </div>

      <div className="one-third">
        <div className="stat"> {props.data.speed}</div>
        <div className="stat-value">Speed</div>
      </div>

      <div className="one-third no-border">
        <div className="stat">{props.data.cost}</div>
        <div className="stat-value">Cost</div>
      </div>
    </div>
  );
}
