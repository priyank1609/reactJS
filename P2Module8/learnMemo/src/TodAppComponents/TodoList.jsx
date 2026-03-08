import React from "react";
import TodoItem from "./TodoItem";

const TodoList = React.memo(({ todos, toggleTodo }) => {

    console.log("TodoList Rendered");

    return (
        <ul className="todo-list">

            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />
            ))}

        </ul>
    );
});

export default TodoList;