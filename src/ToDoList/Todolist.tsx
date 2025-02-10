import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { FilterValuesType, TaskType } from "../App";
// import { Button } from "../components/Button";
import { AddItemForm } from "../components/AddItemForm";
import { EditableSpan } from "../components/EditableSpan";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


type TodoListPropsType = {
  todolistId: string;
  title: string;
  tasks: TaskType[];
  filter: FilterValuesType;

  removeTask: (taskId: string, todolistId: string) => void;
  addTask: (title: string, todolistId: string) => void;
  setTaskNewStatus: (
    taskId: string,
    newStatus: boolean,
    todolistId: string
  ) => void;
  changeTaskTitle: (taskId: string, title: string, todolistId: string) => void;

  changeTodolistFilter: (
    newFilter: FilterValuesType,
    todolistId: string
  ) => void;
  removeTodolist: (todolistId: string) => void;
  changeTodolistItem: (title: string, todolistId: string) => void;
};

export const TodoList = (props: TodoListPropsType) => {
  // const [taskTitle, setTaskTitle] = useState("");
  // const [taskInputError, setTaskInputError] = useState(false);

  const taskList: JSX.Element =
    props.tasks.length === 0 ? (
      <div>Ваш список дел пуст</div>
    ) : (
      <List className="container">
        {props.tasks.map((task: TaskType) => {
          const removeTaskHandler = () =>
            props.removeTask(task.id, props.todolistId);
          const setTaskNewStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.setTaskNewStatus(
              task.id,
              e.currentTarget.checked,
              props.todolistId
            );
          const changeTaskTitleHandler = (title: string) => {
            props.changeTaskTitle(task.id, title, props.todolistId);
          };

          return (
            <ListItem className="wrapper" disablePadding>
              {/* <input
                type="checkbox"
                checked={task.isDone}
                onChange={setTaskNewStatus}
              />{" "} */}
              <Checkbox 
                checked={task.isDone}
                onChange={setTaskNewStatus}
                size="small"
              />
              {/* <span className={task.isDone ? "task-done" : "task"}>
                {task.title}
              </span> */}
              <EditableSpan
                changeTitle={changeTaskTitleHandler}
                title={task.title}
              />
              {/* <Button title={"x"} onClickHandler={removeTaskHandler} /> */}
              <IconButton
                aria-label="delete"
                size="small"
                onClick={removeTaskHandler}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    );

  const addTaskHandler = (itemTitle: string) => {
    props.addTask(itemTitle, props.todolistId);
  };

  // const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     onClickAddTaskHandler();
  //   }
  // };

  const changeTodolistTitleHandler = (title: string) => {
    props.changeTodolistItem(title, props.todolistId);
  };

  return (
    <div className="todolist">
      <h3>
        <EditableSpan
          title={props.title}
          changeTitle={changeTodolistTitleHandler}
        />
      </h3>
      {/* <Button
        title="x"
        onClickHandler={() => props.removeTodolist(props.todolistId)}
      /> */}
      <IconButton aria-label="delete" size="small" onClick={() => props.removeTodolist(props.todolistId)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
      <AddItemForm addItem={addTaskHandler} />
      {/* <div>
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
      </div> */}

      {taskList}
      <div className="wrapper">
        {/* <Button
          classes={props.filter === "all" ? "btn-filter-active" : ""}
          title={"All"}
          onClickHandler={() => {
            props.changeTodolistFilter("all", props.todolistId);
          }}
        /> */}
        {/* <Button
          classes={props.filter === "active" ? "btn-filter-active" : ""}
          title={"Active"}
          onClickHandler={() => {
            props.changeTodolistFilter("active", props.todolistId);
          }}
        /> */}
        {/* <Button
          classes={props.filter === "completed" ? "btn-filter-active" : ""}
          title={"Completed"}
          onClickHandler={() => {
            props.changeTodolistFilter("completed", props.todolistId);
          }}
        /> */}
        <Button
          size="small"
          variant="contained"
          color={props.filter === "all" ? "secondary" : "primary"}
          onClick={() => {
            props.changeTodolistFilter("all", props.todolistId);
          }}
        >
          All
        </Button>
        <Button
          size="small"
          variant="contained"
          color={props.filter === "active" ? "secondary" : "primary"}
          onClick={() => {
            props.changeTodolistFilter("active", props.todolistId);
          }}
        >
          Active
        </Button>
        <Button
          size="small"
          variant="contained"
          color={props.filter === "completed" ? "secondary" : "primary"}
          onClick={() => {
            props.changeTodolistFilter("completed", props.todolistId);
          }}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
