import React from "react";
import styled from "styled-components";

function TodoButton({ setOpen, onChange, todo }) {
  return (
    <>
      <textarea
        placeholder="할 일을 적으세요"
        value={todo}
        onChange={onChange}
      />
      <button onClick={() => setOpen(false)}>Add Card</button>
      <button onClick={() => setOpen(false)}>x</button>
    </>
  );
}

export default TodoButton;
