import React from "react";

export default function contactItem(props) {
  return (
    <div className="contactItem">
      <div className="contactDatail">
        <p>{props.dataContact.date}</p>
      </div>
      <div className="textBoxLeft">
        <div className="contactTextBox">
          <p>{props.dataContact.text}</p>
        </div>
      </div>
    </div>
  );
}
