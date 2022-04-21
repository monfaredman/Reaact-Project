import React from "react";
import "../app.css";

export default function footer(props) {
  return (
    <div className="footerChat">
      <div className="inputWrapper">
        <textarea value={props.click} rows="1" className="input" />
      </div>
      <div className="sentBtnWrapper">
        <button className="sentBtn">Send</button>
      </div>
    </div>
  );
}
