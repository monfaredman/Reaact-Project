import React from "react";
import "../app.css";
import CatAvatar from "../images/catAvatar.jpg";

export default function header() {
  return (
    <div className="headerChat">
      <div className="avatar">
        <img className="contactAvatar" src={CatAvatar} />
      </div>
      <div className="userDetails">
        <h2 className="name">Tom</h2>
        <p className="lastSeen">Last Seen 2 min Ago</p>
      </div>
    </div>
  );
}
