import React, { useState } from "react";

function TodoInput({ addTodo }) {

    console.log("TodoInput rendered");

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        addTodo(text);
        setText("");
    };

    return (
        <form
            className="todo-input"
            onSubmit={handleSubmit}
        >

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task..."
            />

            <button type="submit">
                Add
            </button>

        </form>
    );
}

export default TodoInput;