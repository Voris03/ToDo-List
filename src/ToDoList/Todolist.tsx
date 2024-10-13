import React from "react";
import { FilterValuesType, TaskType } from "../App";
import { Button } from "./Button";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: number) => void;
  changeFilter: (newFilter: FilterValuesType) => void;
};

export const TodoList = (props: TodolistPropsType) => {
  const taskList: JSX.Element =
    props.tasks.length === 0 ? (
      <div>Ваш список дел пуст</div>
    ) : (
      <ul>
        {props.tasks.map((task: TaskType) => {
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />{" "}
              <span>{task.title}</span>
              <Button
                title={"x"}
                onClickHandler={() => {
                  props.removeTask(task.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    );

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input />

        {/* доделать функцию добавления  */}
        <Button title={"+"} onClickHandler={() => {}} />
      </div>
      {taskList}
      <div>
        <Button
          title={"All"}
          onClickHandler={() => {
            props.changeFilter("all");
          }}
        />
        <Button
          title={"Active"}
          onClickHandler={() => {
            props.changeFilter("active");
          }}
        />
        <Button
          title={"Completed"}
          onClickHandler={() => {
            props.changeFilter("completed");
          }}
        />
      </div>
    </div>
  );
};
