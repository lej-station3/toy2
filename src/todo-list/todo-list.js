import React from 'react'


//카드창이 되는 곳 
function Todo({todo}) {
  return(
    <div>
      {todo.text}
    </div>
  )
}


function TodoList({todoList}){
  return(
    <div>
      {todoList.map(todo => {
        return(
          <Todo
          key={todo.id}
          todo={todo}
          />
        )
      })}
    </div>
  )
}

export default TodoList;