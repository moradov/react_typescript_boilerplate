import React, { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodosList from './components/TodosList';
import { todoItemType, todoFormSubmitType } from './ts_types/todos';

const App: React.FC = () => {
  //ts todos state managment
  const [todosList, setTodosList] = useState<todoItemType[]>([]);
  // useEffect(() => console.log(todosList), [todosList]);

  const todoFormSubmit: todoFormSubmitType = (event, todoItem) => {
    event.preventDefault();
    setTodosList([...todosList, todoItem]);
  };
  const deleteItem = (ItemId: string | number) => {
    setTodosList(todosList.filter((todo) => todo.todo_name !== ItemId));
  };
  return (
    <div className="App">
      <AddTodoForm catchTodoFormSubmit={todoFormSubmit} />
      <TodosList TodosList={todosList} catchTodoDelete={deleteItem} />
    </div>
  );
};

export default App;
