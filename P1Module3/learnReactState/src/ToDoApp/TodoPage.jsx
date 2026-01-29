import { useReducer } from "react"
import TodoItem from "./TodoItem";
import {Plus, Rabbit, Trash} from 'lucide-react';

const TodoPage = () => {
    const compareFunction = (a, b) => a.text.localeCompare(b.text);
    const ACTION_TYPES = {
        'ADD_TODO': 'ADD_TODO',
        'TOGGLE_TODO': 'TOGGLE_TODO',
        'DELETE_TODO': 'DELETE_TODO',
        'DELETE_ALL_TODO': 'DELETE_ALL_TODO',
        'UPDATE_TODO': 'UPDATE_TODO',
        'MOVE_TODO_UP': 'MOVE_TODO_UP',
        'MOVE_TODO_DOWN': 'MOVE_TODO_DOWN',
        'SORT_TODO': 'SORT_TODO',
    }
    const [todolist, dispatcher] = useReducer(reducerFunc, []);
    const emptyState = <div className="mt-18 flex flex-col gap-4 items-center text-secondary-text">
        <Rabbit size={40}/>
        <p>Your Todo's are empty</p>
    </div>
    const completedTodos = todolist.filter((item) => item.completed == true);
    const isTodoEmpty = todolist.length == 0;
    const isTodoSorted = todolist.every((todo, index, arr) => {
        return index===0 || compareFunction(arr[index-1], todo) <= 0;
    })

    function reducerFunc(prevState, action) {
        switch(action.type) {
            case ACTION_TYPES.ADD_TODO:
                const text = action.payload;
                const newTodo = {
                    text,
                    id: crypto.randomUUID(),
                    completed: false
                }

                return [...prevState, newTodo];
            case ACTION_TYPES.TOGGLE_TODO:
                return prevState.map((item) => {
                    if(item.id == action.payload.id){
                        return {...item, completed: action.payload.checked}
                    }
                    return item;
                })
            case ACTION_TYPES.DELETE_TODO:
                return prevState.filter((item) => item.id !== action.payload.id);
            case ACTION_TYPES.DELETE_ALL_TODO:
                return ([])
            case ACTION_TYPES.UPDATE_TODO:
                return prevState.map((item) => {
                    if(item.id === action.payload.id){
                        return {...item, text: action.payload.todoText}
                    }
                    return item;
                })
            case ACTION_TYPES.MOVE_TODO_UP:
                const newTodosUp = [...prevState];
                [newTodosUp[action.payload.index], newTodosUp[action.payload.index-1]] = [newTodosUp[action.payload.index-1], newTodosUp[action.payload.index]]
                return newTodosUp;
            case ACTION_TYPES.MOVE_TODO_DOWN:
                const newTodosDown = [...prevState];
                [newTodosDown[action.payload.index], newTodosDown[action.payload.index+1]] = [newTodosDown[action.payload.index+1], newTodosDown[action.payload.index]]
                return newTodosDown;
            case ACTION_TYPES.SORT_TODO:
                const newTodos = [...prevState];
                newTodos.sort(compareFunction);
                return newTodos;
            default:
                break;
        }
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        const todoText = e.target["todo"].value;
        if(!todoText) return;

        dispatcher({
            type: ACTION_TYPES.ADD_TODO,
            payload: todoText,
        })

        e.target.reset();
    }

    function onTodoToggle(id, checked) {
        dispatcher({
            type: ACTION_TYPES.TOGGLE_TODO,
            payload: {
                id, checked
            }
        })
    }

    function handleDeleteTodo(id) {
        dispatcher({
            type: ACTION_TYPES.DELETE_TODO,
            payload: {
                id
            }
        })
    }

    function handleDeletedAll() {
        dispatcher({
            type: ACTION_TYPES.DELETE_ALL_TODO,
        })
    }

    function handleSortTodos() {
        dispatcher({
            type: ACTION_TYPES.SORT_TODO,
        })
    }

    function handleUpdateTodoText(id, todoText) {
        if(!todoText) return;
        dispatcher({
            type: ACTION_TYPES.UPDATE_TODO,
            payload: {
                id, todoText
            }
        })
    }

    function handleTodoMoveUp(index) {
        if(index==0) return;
        dispatcher({
            type: ACTION_TYPES.MOVE_TODO_UP,
            payload: {
                index
            }
        })
    }

    function handleTodoMoveDown(index) {
        if(index==todolist.length-1) return;
        dispatcher({
            type: ACTION_TYPES.MOVE_TODO_DOWN,
            payload: {
                index
            }
        })
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
                {completedTodos.length} / {todolist.length} Completed
            </p>
        )}

        {!isTodoEmpty ? (
          <div className="space-y-4">
            {todolist.map((item, index) => (
              <TodoItem
                key={item.id}
                item={item}
                onTodoToggle={onTodoToggle}
                onTodoDelete={handleDeleteTodo}
                onTodoTextUpdate={handleUpdateTodoText}
                onMoveUp={handleTodoMoveUp}
                onMoveDown={handleTodoMoveDown}
                index={index}
                todosCount={todolist.length}
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
