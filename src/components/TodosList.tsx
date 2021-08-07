import React from 'react';
import { todosListType, catchTodoDeleteType } from '../ts_types/todos';
const TodosList: React.FC<{
  TodosList: todosListType;
  catchTodoDelete: catchTodoDeleteType;
}> = ({ TodosList, catchTodoDelete }) => {
  return (
    <div>
      {TodosList.map((todo) => (
        <div
          style={{ display: 'flex', justifyContent: 'space-around' }}
          key={todo.todo_name}
        >
          <div> {todo.todo_name} </div>
          <div onClick={() => catchTodoDelete(todo.todo_name)}>Delete </div>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
