import React, { useState } from 'react'

const FormIntro = () => {
    // 1. The <form> component
    // const [query, setQuery] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault(); // stop page reload
    //     console.log("Searching for:", query);
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <input
    //             name="query"
    //             value={query}
    //             onChange={(e) => setQuery(e.target.value)}
    //         />

    //         <button type="submit">Search</button>
    //     </form>
    // );


    // 2. The <input> component
    // const [name, setName] = useState("");

    // return (
    //     <input
    //         name="userName"
    //         value={name}
    //         placeholder="Enter your name"
    //         onChange={(e) => setName(e.target.value)}
    //         onFocus={() => console.log("Input focused")}
    //         onBlur={() => console.log("Input blurred")}
    //     />
    // );


    // 3. Common input types
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(18);
    const [agree, setAgree] = useState(false);
    const [color, setColor] = useState("#000000");

    return (
        <form>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <input
                type="number"
                min="1"
                max="100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <br />

            <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
            />
            I agree

            <br />

            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
        </form>
    );
}

export default FormIntro
