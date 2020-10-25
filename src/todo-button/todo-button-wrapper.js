import React, { useState } from "react";
import styled from "styled-components";
import TodoButton from "./todo-button";

function TodoButtonWrapper() {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    console.log("왜안남어", e.currentTarget.value);
    setTodo(e.currentTarget.value);
  };

  return (
    <>
      {open ? (
        <TodoButton setOpen={setOpen} todo={todo} onChange={handleChange} />
      ) : (
        <p onClick={() => setOpen(!open)}>Add a Card</p>
      )}
    </>
  );
}

export default TodoButtonWrapper;
