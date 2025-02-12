import React, { ChangeEvent } from "react";
import { FilterValuesType, TaskType } from "../App";
// import { Button } from "../components/Button";
import { AddItemForm } from "../components/AddItemForm";
import { EditableSpan } from "../components/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { filterButtonsContainerSx, getListItemSX } from "./Todolist.styled";
import { FilterButton } from "../components/FilterButton";

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
            <ListItem
              key={task.id}
              disablePadding
              sx={getListItemSX(task.isDone)}
            >
              {/* <input
                type="checkbox"
                checked={task.isDone}
                onChange={setTaskNewStatus}
              />{" "} */}
              <Box>
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
              </Box>
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

  const changeTodolistTitleHandler = (title: string) => {
    props.changeTodolistItem(title, props.todolistId);
  };

  return (
    <div className="todolist">
      <Box
        sx={{ display: "flex", justifyContent: "space-between", p: "10px 0" }}
      >
        <Typography variant="h6">
          <EditableSpan
            title={props.title}
            changeTitle={changeTodolistTitleHandler}
          />
        </Typography>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => props.removeTodolist(props.todolistId)}
        >
          <ClearIcon fontSize="medium" />
        </IconButton>
      </Box>

      <AddItemForm addItem={addTaskHandler} />
      <Box sx={{p: '10px'}}>
      {taskList}
      </Box>

      <Box sx={filterButtonsContainerSx}>
        <FilterButton
          title="All"
          filter={props.filter}
          activeFilterValue="all"
          onClickHandler={() => {
            props.changeTodolistFilter("all", props.todolistId);
          }}
        />
        <FilterButton
          title="Active"
          filter={props.filter}
          activeFilterValue="active"
          onClickHandler={() => {
            props.changeTodolistFilter("active", props.todolistId);
          }}
        />
        <FilterButton
          title="Completed"
          filter={props.filter}
          activeFilterValue="completed"
          onClickHandler={() => {
            props.changeTodolistFilter("completed", props.todolistId);
          }}
        />


      </Box>
    </div>
  );
};
