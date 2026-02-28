import React, { useRef, useState } from 'react'

const ControlledComponents = () => {
    // Topic 1 – Uncontrolled Components
    // const nameRef = useRef();

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     alert("Name is: " + nameRef.current.value);
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" ref={nameRef} placeholder="Enter name" />
    //         <button type="submit">Submit</button>
    //     </form>
    // );


    // Topic 2 – Controlled Components
    const [name, setName] = useState("");

    function handleOnChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleOnChange}
                placeholder="Enter name"
            />
            <p>You typed: {name}</p>
        </div>
    )
}

export default ControlledComponents
