import React, { useEffect, useState } from "react";
import Card from "./card";
export default function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((data) => SVGMetadataElement(data));
  });
  return (
    <div>
      <Card data={data} />
    </div>
  );
}
