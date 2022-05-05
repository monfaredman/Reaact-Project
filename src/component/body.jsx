import React from "react";
import ContactItem from "./contactItem";
import UserItem from "./userItem";
import "../app.css";

export default function body(props) {
  const contactItems = props.data.contactData.map((element, index) => {
    if (element.type === "concat") {
      return <ContactItem dataContact={element} key={index} />;
    } else {
      return <UserItem dataUser={element} key={index} />;
    }
  });

  return <div className="bodyChat">{contactItems}</div>;
}
