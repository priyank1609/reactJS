import React, { useState, useMemo, useCallback } from "react";
import "./TodoApp.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
    console.log("TodoApp rendered");

    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    const addTodo = useCallback((text) => {
        setTodos(prev => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ]);
    }, []);

    const toggleTodo = useCallback((id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }, []);

    const filteredTodos = useMemo(() => {

        if (filter === "completed") {
            return todos.filter(t => t.completed);
        }

        if (filter === "active") {
            return todos.filter(t => !t.completed);
        }

        return todos;

    }, [todos, filter]);

    return (
        <div className="app-container">

            <h1 className="title">Todo App</h1>

            <TodoInput addTodo={addTodo} />

            <div className="filters">

                <button
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>

                <button
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>

            </div>

            <TodoList
                todos={filteredTodos}
                toggleTodo={toggleTodo}
            />

        </div>
    );
}

export default TodoApp;