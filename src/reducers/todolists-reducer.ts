import { TodolistType } from "../App";

type RemoveTodolistActionType = {
  type: "REMOVE-TODOLIST";
  payload: {
    todolistId: string;
  };
};

export const todolistReducer = (
  todolist: Array<TodolistType>,
  action: RemoveTodolistActionType
): Array<TodolistType> => {
  switch (action.type) {
    case "REMOVE-TODOLIST":
      return todolist.filter((tl) => tl.id !== action.payload.todolistId);
    default:
      return todolist;
  }
};
