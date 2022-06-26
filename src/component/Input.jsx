import React from "react";

export default function Input({ inputMoodel, onEvent, addTodo }) {
  return (
    <div>
      <input value={inputMoodel} onChange={onEvent} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
