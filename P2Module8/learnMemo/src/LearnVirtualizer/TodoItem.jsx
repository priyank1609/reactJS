import React from "react";

const TodoItem = ({ todo, onToggle }) => {
    return (
        <div
            style={{
                padding: "12px",
                borderBottom: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: todo.completed ? "#e6ffe6" : "white",
            }}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
            >
                {todo.text}
            </span>
        </div>
    );
};

export default React.memo(TodoItem);