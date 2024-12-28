import React, { useRef } from "react";
import { FilterValuesType, TaskType } from "../App";
import { Button } from "../components/Button";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  changeFilter: (newFilter: FilterValuesType) => void;
  addTask: (title: string) => void;
};

export const TodoList = (props: TodolistPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);

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

  const onClickAddTaskHandler = () => {
    if (inputRef.current) {
        if(inputRef.current.value.length < 16) {
            props.addTask(inputRef.current.value);
            inputRef.current.value = "";
        } else {
            alert("to long")
        }
    }
  };

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input ref={inputRef} placeholder="max length title 15 characters"/>
        <Button title={"+"} onClickHandler={onClickAddTaskHandler} />
        <div>Max length title is 15 characters</div>
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
