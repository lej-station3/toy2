import React,{useState,useRef} from 'react';
import List from './todo-list/todo-list';
import {createGlobalStyle} from 'styled-components';
import produce from 'immer';
import Title from './todo-list/todo-title';
import TodoList from './todo-list/todo-list';

  const GlobalStyle = createGlobalStyle`
  html{
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-size:10px;
  }
  body{
    background-color:#f2f3f2;
  }
  `
  function App() {
      //todo는 여기서 관리하자
    const [todo,setTodo] = useState('');
    const [todoList,setTodoList] = useState([
      {
        id:1,
        text:'1'
      },
      {
        id:2,
        text:'2'

      }
  ])

    const handleChange = (e) => {
    console.log('todo변경',todo);
    setTodo(e.currentTarget.value);
    }

    const nextId = useRef(3);

    const handleCreate = () => {
      const todo = {
        id:nextId,
        text:todo
      };
      setTodoList(
        produce(todoList,draft => {
          draft.push(todo);
        })
      );
      setTodo('');
      nextId.currnet +=1;
     };

  return(
    <>
    <GlobalStyle />
    <Title
    />
    <TodoList 
    todoList = {todoList}/>
    </>
  )
}

export default App;