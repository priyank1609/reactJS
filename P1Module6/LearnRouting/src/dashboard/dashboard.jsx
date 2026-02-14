import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const Dashboard = () => {
    return (
        <div className='bg-gray-900 text-white p-4 min-h-screen'>
            <h1 className='text-2xl font-semibold text-yellow-300'>
                Dashboard
            </h1>
            <nav className='my-4 border py-6'>
                <ul className='flex text-center'>
                    <li className='flex-auto'>
                        <NavLink 
                            to={"products"} 
                            replace
                            className={({isActive}) => 
                                `underline ${isActive && "bg-blue-600 px-8 py-2 text-white rounded-sm"}`
                            }>
                                Products
                        </NavLink>
                    </li>
                    <li className='flex-auto'>
                        <NavLink 
                            to={"users"} 
                            replace
                            className={({isActive}) => 
                                `underline ${isActive && "bg-blue-600 px-8 py-2 text-white rounded-sm"}`
                            }>
                                Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
  )
}

export default Dashboard
