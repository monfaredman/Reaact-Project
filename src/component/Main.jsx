import React, { useState } from "react";
import Input from "./Input";
import Todos from "./Todos";

const initState = [
  { id: 0, title: "clean room", completed: false },
  { id: 1, title: "go class", completed: true },
];
export default function Main() {
  const [model, setModel] = useState("");
  const [data, setData] = useState(initState);
  const [id, setId] = useState(2);

  const changeModel = (e) => {
    setModel(e.target.value);
  };
  const click = () => {
    setId(id + 1);
    initState.push({ title: model, id: id, completed: false });
    setData([...initState]);
    setModel("");
  };
  const toggle = (e) => {
    let item = data.find((x) => x.id === e.id);
    item.completed = !item.completed;
    setData([...initState]);
  };
  const listRender = data.map((item) => (
    <li key={"item" + item.id} onClick={() => toggle(item)}>
      <Todos todo={item} />
    </li>
  ));
  return (
    <div>
      <Input inputMoodel={model} onEvent={changeModel} addTodo={click} />
      <br />
      {listRender}
    </div>
  );
}
