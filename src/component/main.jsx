import React, { useEffect, useState } from "react";
import Card from "./card";
export default function Main() {
  const [data, setData] = useState([]);
  const [loadign, setloadign] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setloadign(false);
      });
  }, []);
  function prevCard() {
    const counter = selectedCard - 1;
    const prev = counter >= 0 ? counter : 0;
    setSelectedCard(prev);
  }
  function nextCard() {
    const counter = selectedCard + 1;
    const next = counter <= data.length - 1 ? counter : data.length - 1;
    setSelectedCard(next);
  }

  return loadign ? (
    <h1>loadign</h1>
  ) : (
    <div>
      <button onClick={prevCard} className="slick-prev">
        -
      </button>
      <Card cardInfo={data[selectedCard]} />
      <button onClick={nextCard} className="slick-next">
        +
      </button>
    </div>
  );
}
