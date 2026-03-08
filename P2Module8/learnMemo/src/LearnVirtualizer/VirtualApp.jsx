import React, { useState } from "react";
import TodoList from "./TodoList";
import { generateTodos } from "./todos";

export default function VirtualApp() {
    const [todos, setTodos] = useState(generateTodos(10000));
    console.log(todos);

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    return (
        <div style={{ maxWidth: "600px", margin: "40px auto" }}>
            <h1>Virtualized Todo List</h1>

            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
}