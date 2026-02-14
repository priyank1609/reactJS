import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios("https://dummyjson.com/users");
      const data = response.data;
      console.log(data.users);
    }

    fetchData();
  }, [])

  return (
    <div>
      Users
    </div>
  )
}

export default Users
