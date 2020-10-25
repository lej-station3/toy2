import React, { useState, useRef } from "react";
import TodoList from "../component/todo-list/todo-list";
import { useSelector } from "react-redux";
import styled from "styled-components";
import * as actions from "../modules/list";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-size:10px;
  }
  body{
    background-color:#fff;
  }
  `;
function App() {
  // //todo는 여기서 관리하자
  // const [todo, setTodo] = useState("");
  // const [todoList, setTodoList] = useState([
  //   {
  //     id: 1,
  //     text: "1",
  //   },
  //   {
  //     id: 2,
  //     text: "2",
  //   },
  // ]);
  const { list } = useSelector((state) => state);
  // const nextId = useRef(3);
  // const handleCreate = () => {
  //   const todo = {
  //     id: nextId,
  //     text: todo,
  //   };
  //   setTodoList(
  //     produce(todoList, (draft) => {
  //       draft.push(todo);
  //     })
  //   );
  //   setTodo("");
  //   nextId.currnet += 1;
  // };

  const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <>
      <GlobalStyle />
      <h2>Trello</h2>
      {/* 바로 보내주면 에러남  */}
      <AppWrapper>
        {list.map((data) => (
          <TodoList key={data.id} title={data.title} cards={data.cards} />
        ))}
      </AppWrapper>
    </>
  );
}

export default App;
