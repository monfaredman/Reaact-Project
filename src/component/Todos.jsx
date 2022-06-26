import React from "react";

export default function Todos({ todo }) {
  return (
    <h1
      style={{
        cursor: "pointer",
        color: "green",
        textDecoration: `${todo.completed ? "line-through" : ""}`,
      }}
    >
      {todo.title}
    </h1>
  );
}
