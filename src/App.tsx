import React, { useState } from 'react';
import './App.css';
import { TodoList } from './ToDoList/Todolist';
import { v1 } from 'uuid';

// Create
// Read(filter, sort, search, view mode)
// Update
// Delete

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    // BLL

    console.log(v1())

    const todolistTitle = "What to learn"

    const [tasks, setTasks]  = useState<TaskType []>([  //initial state
        {id: v1(),title: "HTML&CSS",isDone: true},
        {id: v1(),title: "JS/TS",isDone: true},
        {id: v1(),title: "React",isDone: false}
    ])

    const removeTask = (taskId: string) => {
        // 1
        const nextState: TaskType[] = tasks.filter(task => task.id !== taskId)
        // 2
        setTasks(nextState)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            title: title,
            isDone: false,
            id: v1()
        } 
        const copyState = [...tasks, newTask]
        setTasks(copyState)
    }

    // GUI

    const [filter, setFilter] = useState<FilterValuesType>("all")

    let filteredTasks: TaskType[] = tasks
    if(filter === "active"){
        filteredTasks = tasks.filter(task => task.isDone === false)
    }
    if(filter === "completed"){
        filteredTasks = tasks.filter(task => task.isDone === true)
    }

    const changeFilter = (newFilter: FilterValuesType) => setFilter(newFilter)

    return (
        <div className="App">
            <TodoList
                title={todolistTitle}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask = {addTask}
            />
        </div>
    );
}

export default App;
