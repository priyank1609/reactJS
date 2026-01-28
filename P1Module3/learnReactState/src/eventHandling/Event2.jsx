const ChildA = (prop) => {
    const steps = 5;
    return (
        <button onClick={(e) => prop.handler(steps, e)}>Click Me Child A</button>
    )
}

const ChildB = (prop) => {
    const rotis = 5;
    return (
        <button onClick={() => prop.handler(rotis)}>Click Me Child B</button>
    )
}

const Event2 = () => {
    const walking = (steps, e) => {
        alert(`I have walked ${steps} steps`);
        e.stopPropagation();
    }

    const eating = (rotis) => {
        alert(`I have eaten ${rotis} rotis`);
    }

    return (
        <div onClick={() => alert("Clicked from parent")}>
            <ChildA handler={walking}/>
            <ChildB handler={eating}/>
        </div>
    )
}

export default Event2
