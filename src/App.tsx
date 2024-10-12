import React from 'react';
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

    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to buy"

    const tasks_1: TaskType[] = [
        {id: 1,title: "HTML&CSS",isDone: true},
        {id: 2,title: "JS/TS",isDone: true},
        {id: 3,title: "React",isDone: false}
    ]
    const tasks_2: TaskType[] = [
        {id: 1,title: "Milk",isDone: false},
        {id: 2,title: "Bread",isDone: false},
        {id: 3,title: "Butter",isDone: false}
    ]

    // GUI
    return (
        <div className="App">
            <TodoList title={todolistTitle_1} tasks={tasks_1}/>
            <TodoList title={todolistTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
