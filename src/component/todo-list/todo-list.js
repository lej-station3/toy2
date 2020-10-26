import React, { useState } from 'react';
import TodoCard from './todo-card';
import TodoButtonWrapper from '../../todo-button/todo-button-wrapper';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { insertCard } from '../../modules/list';

//리스트 큰 창을 만들자
function TodoList({ data,listID }) {
  const { title, cards } = data;
  const dispatch = useDispatch();

  const [text, setText] = useState('');


  const handleChange = e => {
    console.log('할 일', e.currentTarget.value );
    setText(e.currentTarget.value);
  };



  const handleinsertCard =  text  => {
    if(text) {
      dispatch(insertCard(listID,text));
    }
  };

  return (
    <List>
      <h5>{title}</h5>
      {cards.map(card => (
        <TodoCard 
          key={card.id}
          text={card.text}
        />
      ))}
      <TodoButtonWrapper
        text={text}
        handleinsertCard={handleinsertCard}
        handleChange={handleChange}


      />
    </List>
  );
}

const List = styled.div`
  width: 300px;
  background-color: #ccc;
  border-radius: 3px;
`;

export default TodoList;
