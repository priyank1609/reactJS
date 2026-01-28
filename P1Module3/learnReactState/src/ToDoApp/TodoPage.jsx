import { useState } from "react"
import TodoItem from "./TodoItem";
import {Plus, Rabbit, Trash} from 'lucide-react';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const emptyState = <div className="mt-18 flex flex-col gap-4 items-center text-secondary-text">
        <Rabbit size={40}/>
        <p>Your Todo's are empty</p>
    </div>
    const completedTodos = todos.filter((item) => item.completed == true);
    const compareFunction = (a, b) => a.text.localeCompare(b.text);
    const isTodoEmpty = todos.length == 0;
    const isTodoSorted = todos.every((todo, index, arr) => {
        return index===0 || compareFunction(arr[index-1], todo) <= 0;
    })

    function handleFormSubmit(e) {
        e.preventDefault();
        const todoText = e.target["todo"].value;
        if(!todoText) return;

        const updatedTodos = [...todos, {
            text: todoText,
            id: crypto.randomUUID(),
            completed: false
        }];
        setTodos(updatedTodos);

        e.target.reset();
    }

    function onTodoToggle(id, checked) {
        const newTodos = todos.map((item) => {
            if(item.id == id){
                return {...item, completed: checked}
            }
            return item;
        })
        setTodos(newTodos);
    }

    function handleDeleteTodo(id) {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    }

    function handleDeletedAll() {
        setTodos([]);
    }

    function handleSortTodos() {
        const newTodos = [...todos];
        newTodos.sort(compareFunction);
        setTodos(newTodos);
    }

    function handleUpdateTodoText(id, todoText) {
        if(!todoText) return;
        const newTodo = todos.map((item) => {
            if(item.id === id){
                return {...item, text: todoText}
            }
            return item;
        })
        setTodos(newTodo);
    }

    function handleTodoMoveUp(index) {
        if(index==0) return;
        const newTodos = [...todos];
        [newTodos[index], newTodos[index-1]] = [newTodos[index-1], newTodos[index]]
        setTodos(newTodos);
    }

    function handleTodoMoveDown(index) {
        if(index==todos.length-1) return;
        const newTodos = [...todos];
        [newTodos[index], newTodos[index+1]] = [newTodos[index+1], newTodos[index]]
        setTodos(newTodos);
    }

    return (
      <div className="max-w-2xl mx-auto p-10 lg:p-12 space-y-6">
        <h1 className="font-display text-6xl font-bold text-accent text-center">Super Todo</h1>

        <p className="text-center text-lg font-light text-secondary-text italic">Manage your Todos with ease!</p>

        <form onSubmit={handleFormSubmit} className="bg-gray-700 px-6 py-4 rounded-lg flex justify-between gap-4 ">
          <input type="text" name="todo" placeholder="Enter your todo here" className="flex-1 font-body focus:outline-none" required/>
          <button className="p-3 bg-accent text-black rounded-lg cursor-pointer hover:bg-accent-hover">
            <Plus />
          </button>
        </form>

        <div className="flex justify-center gap-6">
            {!isTodoSorted && (
                <button onClick={handleSortTodos} className="px-4 py-2 ring-2 ring-accent rounded-lg cursor-pointer hover:bg-accent hover:text-black">Sort Todos</button>
            )}
            {!isTodoEmpty && (
                <button onClick={handleDeletedAll} className="px-4 py-2 ring-2 ring-red-400 rounded-lg flex items-center gap-2 hover:bg-red-400 hover:text-black cursor-pointer">
                    <Trash size={24}/>
                    Deleted All
                </button>
            )}
        </div>

        {!isTodoEmpty && (
            <p className="text-secondary-text text-right my-10">
                {completedTodos.length} / {todos.length} Completed
            </p>
        )}

        {!isTodoEmpty ? (
          <div className="space-y-4">
            {todos.map((item, index) => (
              <TodoItem
                key={item.id}
                item={item}
                onTodoToggle={onTodoToggle}
                onTodoDelete={handleDeleteTodo}
                onTodoTextUpdate={handleUpdateTodoText}
                onMoveUp={handleTodoMoveUp}
                onMoveDown={handleTodoMoveDown}
                index={index}
                todosCount={todos.length}
              />
            ))}
          </div>
        ) : (
          emptyState
        )}
      </div>
    );
}

export default TodoPage
