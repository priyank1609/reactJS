import React, { useState } from 'react'

const ObjectArrayState = () => {
    // Topic 1 — Object state mutation (why it is BAD)
    // const [user, setUser] = useState({
    //     name: "Priyank",
    //     age: 25
    // })

    // function handleUpdater() {
    //     setUser({
    //         ...user,
    //         age: user.age+1
    //     });
    // }

    // return (
    //     <div>
    //         <h2>{user.name}</h2>
    //         <h2>{user.age}</h2>
    //         <button onClick={handleUpdater}>Update Age</button>
    //     </div>
    // )


    // Topic 2 — Array state should NOT be mutated
    // const [todos, setTodos] = useState(["Buy milk"]);
    
    // function addTodo() {
    //     setTodos(prev => [...prev, "Read book"]);
    // }

    // return (
    //     <div>
    //         <ul>
    //             {todos.map(t => <li key={t}>{t}</li>)}
    //         </ul>
    //         <button onClick={addTodo}>Add Todo</button>
    //     </div>
    // )


    // Topic 3 — Update an item inside an array
    // const [list, setList] = useState([
    //     { id: 1, title: "Sunset", seen: false },
    //     { id: 2, title: "Ocean", seen: false }
    // ]);

    // function toggleSeen(id) {
    //     let newList = list.map(item => item.id === id ? {...item, seen: !item.seen} : item)
    //     setList(newList)
    // }

    // return (
    //     <>
    //         {list.map(item => (
    //             <div key={item.id}>
    //                 {item.title} - {item.seen ? "Seen" : "Not seen"}
    //                 <button onClick={() => toggleSeen(item.id)}>Toggle seen</button>
    //             </div>
    //         ))}
    //     </>
    // );


    // Topic 4 — Delete an item from an array
    // const [todos, setTodos] = useState([
    //     { id: 1, text: "Study" },
    //     { id: 2, text: "Workout" }
    // ]);

    // function deleteTodo(id) {
    //     const newTodo = todos.filter(item => item.id !== id);
    //     setTodos(newTodo);
    // }

    // return (
    //     <>
    //         {todos.map(t => (
    //             <div key={t.id}>
    //                 {t.text}
    //                 <button onClick={() => deleteTodo(t.id)}>Delete</button>
    //             </div>
    //         ))}
    //     </>
    // )


    // Topic 5 — Reverse or sort an array safely
    // const [list, setList] = useState(["A", "B", "C"]);

    // function reverseList() {
    //     const newList = [...list].reverse();
    //     setList(newList);
    // }

    // return (
    //     <>
    //         <p>{list.join(", ")}</p>
    //         <button onClick={reverseList}>Reverse</button>
    //     </>
    // );


    // Topic 6 — Insert item at a particular index
    const [items, setItems] = useState(["A", "B", "D"]);

    function insert() {
        const index = 2;
        const newList = [
            ...items.slice(0, index),
            "C",
            ...items.slice(index)
        ];
        setItems(newList);
    }

    return (
        <>
            <p>{items.join(", ")}</p>
            <button onClick={insert}>Insert C at index 2</button>
        </>
    );
}

export default ObjectArrayState
