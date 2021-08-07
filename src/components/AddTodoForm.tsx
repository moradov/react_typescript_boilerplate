import React, { useState } from 'react';
import { todoItemType, onTodoChangeType } from '../ts_types/todos';
const AddTodoForm: React.FC<{ catchTodoFormSubmit: Function }> = ({
  catchTodoFormSubmit,
}) => {
  /// ts todos state managment
  const [todoData, setTodoData] = useState<todoItemType>({
    todo_name: '',
    todo_desc: '',
  });
  // useEffect(() => console.log(todoData), [todoData]);

  //ts todo input handler

  const onTodoChange: onTodoChangeType = (event) => {
    setTodoData({ ...todoData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={(event) => catchTodoFormSubmit(event, todoData)}
      >
        <input
          name="todo_name"
          type="text"
          placeholder="todo name"
          onChange={(e) => onTodoChange(e)}
        />
        <input
          name="todo_desc"
          type="text"
          placeholder="todo description"
          onChange={(e) => onTodoChange(e)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddTodoForm;
