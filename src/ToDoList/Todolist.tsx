import React from "react";
import { TaskType } from "../App";
import { Button } from "./Button";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: number) => void
};

export const TodoList = (props: TodolistPropsType) => {
  const taskList: JSX.Element = props.tasks.length === 0
    ? <div>Ваш список дел пуст</div>
    : <ul>
        {props.tasks.map((task: TaskType) => {
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />{" "}
              <span>{task.title}</span>
              <button onClick={()=>props.removeTask(task.id)}>x</button>
            </li>
          );
        })}
    </ul>

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input />
        <Button title={"+"} />
      </div>
      {taskList}
      <div>
        <Button title={"All"} />
        <Button title={"Active"} />
        <Button title={"Completed"} />
      </div>
    </div>
  );
};
