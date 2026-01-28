const Event1 = () => {
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const handleUserNameChanged = (e) => {
        const userName = e.target.value;
        console.log(userName);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="userName">Name</label>
                <input type="text" name="userName" id="userName" onChange={handleUserNameChanged}/>

                <label htmlFor="userPass">Password</label>
                <input type="password" name="userPass" id="userPass"/> 

                <button onClick={() => alert("hello")}>Submit</button>
            </form>
        </div>
    );
}

export default Event1
