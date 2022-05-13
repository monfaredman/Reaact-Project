import React, { useEffect, useState } from "react";

export default function Main() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  });
  return (
    <div>
      <h1>{count}</h1>
      <input
        value={count}
        type="number"
        onChange={(e) => setCount(+e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click!</button>
    </div>
  );
}
