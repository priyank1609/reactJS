import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from '../components/user-card';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios("https://dummyjson.com/users");
      const data = response.data;
      setUsers(data.users);
    }

    fetchData();
  }, [])

  return (
    <div className='space-y-4'>
      <h1 className='text-lg my-4 '>All Users</h1>
      <div className='flex flex-wrap gap-2'>{users.map(item => (<UserCard key={item.id} user={item} />))}</div>
    </div>
  )
}

export default Users
