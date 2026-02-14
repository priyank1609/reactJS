import React from 'react'
import { useLocation } from 'react-router'

const Login = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      Login Component
    </div>
  )
}

export default Login
