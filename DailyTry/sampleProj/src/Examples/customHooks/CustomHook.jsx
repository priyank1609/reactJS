import React from 'react'
import { useUsers } from './useUsers';

const CustomHook = () => {
    const { users, loading, error } = useUsers();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {users.map(u => (
                <li key={u.id}>{u.name}</li>
            ))}
        </ul>
    );
}

export default CustomHook
