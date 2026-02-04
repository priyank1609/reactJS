import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const Child2 = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Child 3</h1>
            <h1>{user.name} Again!</h1>
            <button onClick={() => setUser({...user, name: "Sachin sharma"})}>Change name from Child3</button>
        </div>
    )
}

export default Child2
