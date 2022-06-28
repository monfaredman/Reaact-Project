import React, { useState, useEffect } from "react";
export default function Main({ store }) {
  const [model, setModel] = useState("");
  const [id, setId] = useState(3);
  const [, forceUpdate] = useState();

  useEffect(() => {
    const unSubscribe = store.subscribe(() => forceUpdate((c) => c + 1));
    return () => unSubscribe();
  }, [store]);

  const listRender = store.getState().map((item) => (
    <li
      key={"item" + item.id}
      onClick={() => {
        store.dispatch({ type: "COMPLETE_TODO", id: item.id });
      }}
      style={{
        cursor: "pointer",
        color: "green",
        textDecoration: `${item.completed ? "line-through" : ""}`,
      }}
    >
      {item.title}-{item.completed}
    </li>
  ));
  return (
    <div>
      <div>
        <input
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setId(id + 1);
            store.dispatch({ type: "ADD_TODO", title: model, id: id });
          }}
        >
          Add
        </button>
      </div>
      <br />
      <ul> {listRender}</ul>
    </div>
  );
}
