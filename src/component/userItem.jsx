import React from "react";
import UserAvatar from "../images/monfaredAvatar.jpg";

export default function userItem(props) {
  return (
    <div className="userItem">
      <div className="userDatail">
        <p className="userTime">{props.dataUser.date}</p>
        <img className="userAvatar" src={UserAvatar} />
      </div>
      <div className="textBox">
        <div className="userTextBox">
          <p>{props.dataUser.text}</p>
        </div>
      </div>
    </div>
  );
}
