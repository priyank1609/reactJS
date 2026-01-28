const Event3 = (props) => {
    const handleFruitClicked = (e) => {
        console.log(e.target.innerHTML);
    }

    return (
        <div>
            <button onClick={handleFruitClicked}>{props.name}</button>
        </div>
    )
}

export default Event3
