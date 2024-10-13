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
    return (
        <div className="App">
            <TodoList title={todolistTitle} tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}

export default App;
