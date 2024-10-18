import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { FilterValuesType, TaskType } from "../App";
import { Button } from "./Button";
import { error } from "console";

type TodoListPropsType = {
  title: string;
  tasks: TaskType[];
  filter: FilterValuesType;
  removeTask: (taskId: string) => void;
  changeFilter: (newFilter: FilterValuesType) => void;
  addTask: (title: string) => void;
  setTaskNewStatus: (taskId: string, newStatus: boolean) => void;
};

export const TodoList = (props: TodoListPropsType) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskInputError, setTaskInputError] = useState(false);

  const taskList: JSX.Element =
    props.tasks.length === 0 ? (
      <div>Ваш список дел пуст</div>
    ) : (
      <ul className="container">
        {props.tasks.map((task: TaskType) => {
          const removeTaskHandler = () => props.removeTask(task.id);
          const setTaskNewStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.setTaskNewStatus(task.id, e.currentTarget.checked);

          return (
            <li className="wrapper">
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={setTaskNewStatus}
              />{" "}
              <span className={task.isDone ? "task-done" : "task"}>
                {task.title}
              </span>
              <Button title={"x"} onClickHandler={removeTaskHandler} />
            </li>
          );
        })}
      </ul>
    );

  const onClickAddTaskHandler = () => {
    const trimmedTaskTitle = taskTitle.trim();
    if (trimmedTaskTitle) {
      if (isTitleLengthValid) {
        props.addTask(taskTitle);
        setTaskTitle("");
      }
    } else {
      setTaskInputError(true);
      setTaskTitle("");
    }
  };

  const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickAddTaskHandler();
    }
  };

  const isTitleLengthValid = taskTitle.length <= 15;

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input
          value={taskTitle}
          onChange={(e) => {
            taskInputError && setTaskInputError(false);
            setTaskTitle(e.currentTarget.value);
          }}
          placeholder="Max 15 characters"
          onKeyDown={onKeyDownAddTaskHandler}
          className={taskInputError ? "error" : ""}
        />

        <Button
          title={"+"}
          onClickHandler={onClickAddTaskHandler}
          isDisabled={!isTitleLengthValid}
        />

        {!isTitleLengthValid && (
          <div style={{ color: "red" }}>Max length title is 15 characters!</div>
        )}
        {taskInputError && (
          <div style={{ color: "red" }}>Title is required</div>
        )}
      </div>
      {taskList}
      <div className="wrapper">
        <Button
          classes={props.filter === "all" ? "btn-filter-active" : ""}
          title={"All"}
          onClickHandler={() => {
            props.changeFilter("all");
          }}
        />
        <Button
          classes={props.filter === "active" ? "btn-filter-active" : ""}
          title={"Active"}
          onClickHandler={() => {
            props.changeFilter("active");
          }}
        />
        <Button
          classes={props.filter === "completed" ? "btn-filter-active" : ""}
          title={"Completed"}
          onClickHandler={() => {
            props.changeFilter("completed");
          }}
        />
      </div>
    </div>
  );
};
