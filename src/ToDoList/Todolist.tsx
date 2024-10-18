import React, { useRef, useState, KeyboardEvent } from "react";
import { FilterValuesType, TaskType } from "../App";
import { Button } from "./Button";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  changeFilter: (newFilter: FilterValuesType) => void;
  addTask: (title: string) => void;
};

export const TodoList = (props: TodolistPropsType) => {
  const [taskTitle, setTaskTitle] = useState("");

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
    if(isTitleLengthValid){
        props.addTask(taskTitle);
        setTaskTitle("");
    }
  };

  const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
        onClickAddTaskHandler()
    }
  }

  const isTitleLengthValid = taskTitle.length <= 15;

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.currentTarget.value)}
          placeholder="Max 15 characters"
          onKeyDown={onKeyDownAddTaskHandler}
        />

        <Button
          title={"+"}
          onClickHandler={onClickAddTaskHandler}
          isDisabled={!isTitleLengthValid}
        />
        {!isTitleLengthValid && (
          <div style={{ color: "red" }}>Max length title is 15 characters!</div>
        )}
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
