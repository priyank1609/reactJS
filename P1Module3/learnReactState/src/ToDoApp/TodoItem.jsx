import { Check, ChevronDown, ChevronUp, Cross, SquarePen, Trash, X } from "lucide-react";
import { useState } from "react";
import CheckBox from "./CheckBox";

const TodoItem = ({item, onTodoToggle, onTodoDelete, onTodoTextUpdate, onMoveUp, onMoveDown, index, todosCount}) => {
    const [showEditTodo, setShowEditTodo] = useState(false);
    const todoDivItem = (
        <div className="flex gap-4 justify-between items-center hover:bg-gray-900 rounded-lg px-4 py-2 group">
            <div className="flex flex-col gap-1 text-secondary-text">
                <button className="hover:bg-gray-700 rounded-md p-1 cursor-pointer" disabled={index==0} onClick={() => onMoveUp(index)}><ChevronUp /></button>
                <button className="hover:bg-gray-700 rounded-md p-1 cursor-pointer" disabled={index == todosCount-1} onClick={() => onMoveDown(index)}><ChevronDown /></button>
            </div>
            <div className="flex-1 flex gap-4 items-center">
                <CheckBox 
                    id={item.id} 
                    checked={item.completed} 
                    onChange={(e) => onTodoToggle(item.id, e.target.checked)} 
                    label={item.text}
                />
            </div>
            <div className="hidden group-hover:flex gap-4">
                <button onClick={() => setShowEditTodo(true)}><SquarePen /></button>
                <button className="text-red-400" onClick={() => onTodoDelete(item.id)}><Trash /></button>
            </div>
        </div>
    )
    const todoEditForm = (
        <div className="flex justify-between items-center bg-gray-900 px-4 py-2 min-h-20 rounded-lg group">
            <form className="flex-1 flex items-center gap-2 px-2" onSubmit={handleEditTodo}>
                <input required className="flex-1 border-2 border-secondary-text px-4 py-2 rounded-lg font-body" type="text" name="todo" defaultValue={item.text}/>
                <button className="bg-hover"><Check /></button>
            </form>
            <button className="text-red-400 bg-hover" onClick={() => setShowEditTodo(false)}><X /></button>
        </div>
    )

    function handleEditTodo(e) {
        e.preventDefault();
        const todoText = e.target['todo'].value;
        onTodoTextUpdate(item.id, todoText);
        setShowEditTodo(false);
    }

    return (
        <div className="border-t border-secondary-text pt-3">
            {showEditTodo ? todoEditForm : todoDivItem}
        </div>
    );
}

export default TodoItem
