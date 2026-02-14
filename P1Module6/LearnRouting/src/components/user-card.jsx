import React from 'react'
import { Link } from 'react-router'

const UserCard = ({user}) => {
    return (
        <div className='border p-2 flex-auto'>
            <div>
                <img src={user.image} alt={user.firstName} />
            </div>
            <h3>{user.firstName} {user.lastName}</h3>
        </div>
    )
}

export default UserCard
