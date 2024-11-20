import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./ToDoList/Todolist";
import { v1 } from "uuid";
import { AddItemForm } from "./ToDoList/AddItemForm";

// Create +
// Read(filter, sort, search, view mode) + 
// Update + -
// Delete +

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TaskStateType = {
  [todolistId: string]: TaskType[];
};

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  // BLL
  const todolistId_1 = v1();
  const todolistId_2 = v1();

  const [todolist, setTodolist] = useState<Array<TodolistType>>([
    {
      id: todolistId_1,
      title: "What to learn",
      filter: "all",
    },
    {
      id: todolistId_2,
      title: "What to but",
      filter: "all",
    },
  ]);

  const [tasks, setTasks] = useState<TaskStateType>({
    [todolistId_1]: [
      { id: v1(), title: "HTML&CSS", isDone: false },
      { id: v1(), title: "JS/TS", isDone: false },
      { id: v1(), title: "React", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
    ],
    [todolistId_2]: [
      { id: v1(), title: "Beer", isDone: false },
      { id: v1(), title: "Cheeps", isDone: false },
      { id: v1(), title: "Whisky", isDone: false },
      { id: v1(), title: "Cola", isDone: false },
    ],
  });

  // Tasks
  const removeTask = (taskId: string, todolistId: string) => {
    // // 1
    // const nextState: TaskType[] = tasks.filter((task) => task.id !== taskId);
    // // 2
    // setTasks(nextState);

    setTasks({
      ...tasks,
      [todolistId]: tasks[todolistId].filter((t) => t.id !== taskId),
    });
  };

  const addTask = (title: string, todolistId: string) => {
    const newTask: TaskType = {
      title: title,
      isDone: false,
      id: v1(),
    };
    setTasks({
      ...tasks,
      [todolistId]: [...tasks[todolistId], newTask],
    });
    // const copyState = [...tasks, newTask];
    // setTasks(copyState)
  };

  const setTaskNewStatus = (
    taskId: string,
    newStatus: boolean,
    todolistId: string
  ) => {
    // const nextState: Array<TaskType> = tasks.map((task) =>
    //   task.id === taskId ? { ...task, isDone: newStatus } : task
    // );
    setTasks({
      ...tasks,
      [todolistId]: tasks[todolistId].map((task) =>
        task.id === taskId ? { ...task, isDone: newStatus } : task
      ),
    });
  };

  //  Todolist
  const changeTodolistFilter = (
    newFilter: FilterValuesType,
    todolistId: string
  ) => {
    setTodolist(
      todolist.map((tl) =>
        tl.id === todolistId ? { ...tl, filter: newFilter } : tl
      )
    );
  };

  const removeTodolist = (todolistId: string) => {
    setTodolist(todolist.filter((tl) => tl.id !== todolistId));
    delete tasks[todolistId];
  };

  const addTodolist = (title: string) => {
    const todolistID = v1();
    const newTodolist: TodolistType = {
      id: todolistID,
      title: title,
      filter: "all",
    };

    setTodolist([...todolist, newTodolist]);
    setTasks({ ...tasks, [todolistID]: [] });
  };

  const changeTodolistItem = (
    title: string,
    todolistId: string
  ) => {
    const newTodolistTitle = todolist.map(tl => {
      return tl.id === todolistId ? {...tl, title} : tl
    })
    setTodolist(newTodolistTitle);
  };

  const changeTaskTitle = (taskId: string, title: string, todolistId: string) => {
    const newTodolistTasks = {
      ...tasks,
      [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, title: title} : t)
    }
    setTasks(newTodolistTasks)
  }


  // GUI

  return (
    <div className="App">
      <AddItemForm addItem={addTodolist} />
      {todolist.map((tl) => {
        let filteredTasks: TaskType[] = tasks[tl.id];
        if (tl.filter === "active") {
          filteredTasks = filteredTasks.filter((task) => task.isDone === false);
        }
        if (tl.filter === "completed") {
          filteredTasks = filteredTasks.filter((task) => task.isDone === true);
        }

        return (
          <TodoList
            todolistId={tl.id}
            title={tl.title}
            tasks={filteredTasks}
            filter={tl.filter}
            removeTask={removeTask}
            changeTodolistFilter={changeTodolistFilter}
            removeTodolist={removeTodolist}
            addTask={addTask}
            setTaskNewStatus={setTaskNewStatus}
            changeTodolistItem={changeTodolistItem}
            changeTaskTitle={changeTaskTitle}
          />
        );
      })}
    </div>
  );
}

export default App;
