import React from "react";

const TodoItem = React.memo(({ todo, toggleTodo }) => {

    console.log("TodoItem Rendered:", todo.text);

    return (
        <li
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
        >
            {todo.text}
        </li>
    );
});

export default TodoItem;