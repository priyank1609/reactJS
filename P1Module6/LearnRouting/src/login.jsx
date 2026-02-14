import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { useAuth } from './providers/with-auth-provider';

const Login = () => {
  const location = useLocation();
  const from = location.state?.from || "/dashboard";
  const {user,setUser} = useAuth();
  const navigate = useNavigate();
  if(user) return <Navigate to={from} />
  const handleToggleLogin = () => {
    if(user){
      setUser(null);
      localStorage.clear();
    } else{
      const userObj = { name:"Priyank", email: "abc@gmail.com" };
      setUser(userObj)
      localStorage.setItem("USER_TOKEN", "KHEFGLWERFGW;LEFGQFH237");
    }
    navigate(from);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button className='bg-yellow-400 text-black px-4 py-2 cursor-pointer' onClick={handleToggleLogin}>Toggle Login</button>
    </div>
  )
}

export default Login
