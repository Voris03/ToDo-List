import React, { useState } from 'react';
import './App.css';
import { TodoList } from './ToDoList/Todolist';

// Create
// Read(filter, sort, search, view mode)
// Update
// Delete

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // BLL

    const todolistTitle = "What to learn"

    const [tasks, setTasks]  = useState<TaskType []>([  //initial state
        {id: 1,title: "HTML&CSS",isDone: true},
        {id: 2,title: "JS/TS",isDone: true},
        {id: 3,title: "React",isDone: false}
    ])

    const removeTask = (taskId: number) => {
        // 1
        const nextState: TaskType[] = tasks.filter(task => task.id !== taskId)
        // 2
        setTasks(nextState)
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
            <TodoList title={todolistTitle} tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
