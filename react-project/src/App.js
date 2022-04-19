import React from "react";
import Card from "./cards";
export default function App() {
  const users = [
    { name: "moslem", age: 23 },
    { name: "ali", age: 2 },
    { name: "hossein", age: 70 },
  ];
  const usersTag = users.map((data, index) => (
    <Card name={data.name} age={data.age} key={index} />
  ));
  return <div>{usersTag} </div>;
}
