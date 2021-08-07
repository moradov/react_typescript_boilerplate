export type todoItemType = { todo_name: string; todo_desc: string };
export type todosListType = todoItemType[];
export type onTodoChangeType = (event: any) => void;
export type todoFormSubmitType = (event: any, todoItem: todoItemType) => void;
export type catchTodoDeleteType = (ItemId: string | number) => void;
