import React from "react";
import TodoCard from "./todo-card";
import styled from "styled-components";
import TodoButtonWrapper from "../../todo-button/todo-button-wrapper";

//리스트 큰 창을 만들자
function TodoList({ title, cards }) {
  return (
    <List>
      <h5>{title}</h5>
      {cards.map((card) => (
        <TodoCard text={card.text} />
      ))}
      <TodoButtonWrapper />
    </List>
  );
}

const List = styled.div`
  width: 300px;
  background-color: #ccc;
  border-radius: 3px;
`;

export default TodoList;
