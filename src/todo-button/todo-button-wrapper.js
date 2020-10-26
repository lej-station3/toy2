import React, { useState } from 'react';
import styled from 'styled-components';



function TodoButton({ setOpen,handleinsertCard,handleChange,text }) {


  const handleEnter = e =>{
    e.preventDefault();
    handleinsertCard(text);
    setOpen(false);
  };


  return (
    <>
      <input
        placeholder = "할 일"
        onChange = {handleChange}
        value = { text }
        
      />
      <button onClick = { handleEnter }>Add Card</button>
      <button onClick = {() => setOpen(false)}>x</button>
    </>
  );
}


function TodoButtonWrapper({ handleinsertCard,handleChange,text }) {

  const [open, setOpen] = useState(false);
  //지워지는 함수 false면 지워라 
  return (  
    <>
      {open ? (
        <TodoButton
          text={text}
          handleinsertCard = {handleinsertCard} 
          handleChange={handleChange}
          setOpen = {setOpen} 
        />
      ) : (
        <p onClick = {() => setOpen(!open)}>Add a Card</p>
      )}
    </>
  );
}

export default TodoButtonWrapper;
