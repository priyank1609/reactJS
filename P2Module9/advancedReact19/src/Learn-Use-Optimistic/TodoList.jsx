import React, { useOptimistic, useState, useTransition } from "react";

const TodoItem = ({ todo }) => (
    <li className="bg-gray-100 px-4 py-2 rounded-md border border-gray-300">
        {todo.text}
        {todo.pending && <p className="text-sm text-red-500">Adding New Todo....</p>}
    </li>
);

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    // const [isPending, setIsPending] = useState(false);
    const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos, (currentTodos, newTodo) => [{text: newTodo, pending: true}, ...currentTodos]);
    const [isPending, startTransition] = useTransition();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newTodo = formData.get("todoText");

        if (!newTodo) return;
        e.target.reset();

        startTransition(async () => {
            setOptimisticTodos(newTodo);
            try {
                await fakeApiCallToAddTodo(newTodo);
                setTodos((prev) => [{text: newTodo, pending: false}, ...prev]); // persistent data
                setError(null);
            } catch (e) {
                console.error("Failed to add todo:", e);
                setError("Failed to add todo. Please try again.");
                setTimeout(() => {
                    setError(null);
                },2000)
            }
        })
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">My Todos</h2>

            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todoText"
                    placeholder="Enter new todo..."
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-teal-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
                >
                    {isPending ? "Adding..." : "Add"}
                </button>
            </form>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <ul className="space-y-2">
                {optimisticTodos.map((todo, index) => (
                    <TodoItem todo={todo} key={index} />
                ))}
            </ul>
        </div>
    );
}

const fakeApiCallToAddTodo = (todo) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.4 ? resolve() : reject(new Error("API Error"));
        }, 2000);
    });

export default TodoList;
