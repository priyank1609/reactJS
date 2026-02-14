import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
    const shouldRedirect = false;

    function handleBtnClick() {
        navigate("dashboard", {
            replace: true,
            relative: true
        })
    }

    if(shouldRedirect) return <Navigate to={"/dashboard"} />

    return (
        <div>
            <nav>
                <Link to={"/login"} state={{name: "Priyank"}}>Login</Link>
                <Link to={"/about"}>About</Link>
            </nav>

            <button className='bg-black text-white hover:cursor-pointer' onClick={handleBtnClick}>Click to send somewhere</button>
        </div>
    )
}

export default Home